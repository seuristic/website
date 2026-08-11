#!/usr/bin/env python3
"""Generate public/favicon.svg from the display font's 'S'.

A favicon renders in an isolated context with no network, so a webfont reference
would never load — the glyph has to be baked in as an outline.

Instrument Serif's 'S' is not point-symmetric: its lower half is 336 units wide
against the upper half's 303, and correspondingly heavier. Mirroring the lower
half onto the top makes it symmetric with the lower half's width and weight,
which also means one 90-degree copy is enough for a 4-fold symmetric mark:
    R90(S ∪ R90(S)) = R90(S) ∪ R180(S) = R90(S) ∪ S
because R180(S) == S once the glyph is symmetric.

    pip install fonttools brotli skia-pathops
    python scripts/gen-favicon.py path/to/InstrumentSerif.woff2
"""

import sys
from pathlib import Path as FsPath

import pathops
from fontTools.misc.transform import Transform
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

TILE = 32.0  # viewBox is TILE x TILE
GLYPH = 20.0  # glyph height within the tile
TILT = -9.0  # whole mark turned this many degrees within the tile
BG = "#18181b"
FG = "#fafafa"
OUT = FsPath(__file__).resolve().parent.parent / "public" / "favicon.svg"


def band(lo, hi, x0, x1):
    """A rectangle spanning y=lo..hi, wide enough to clip the whole glyph."""
    rect = pathops.Path()
    pen = rect.getPen()
    pen.moveTo((x0 - 10, lo))
    pen.lineTo((x1 + 10, lo))
    pen.lineTo((x1 + 10, hi))
    pen.lineTo((x0 - 10, hi))
    pen.closePath()
    return rect


def cut_span(path, y, x0, x1, thickness=1.0, above=False):
    """The x-interval the outline occupies in a hairline band next to y."""
    lo, hi = (y, y + thickness) if above else (y - thickness, y)
    sliver = pathops.Path()
    pathops.intersection([path], [band(lo, hi, x0, x1)], sliver.getPen())
    sx0, _, sx1, _ = sliver.bounds
    return sx0, sx1


def transformed(path, transform):
    out = pathops.Path()
    path.draw(TransformPen(out.getPen(), transform))
    return out


def symmetric_glyph(font, char="S"):
    """The glyph with its wider lower half mirrored onto the top."""
    glyphs = font.getGlyphSet()
    source = pathops.Path()
    glyphs[font.getBestCmap()[ord(char)]].draw(source.getPen())

    x0, y0, x1, y1 = source.bounds
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2

    lower = pathops.Path()
    pathops.intersection([source], [band(y0 - 10, cy, x0, x1)], lower.getPen())

    # Where the spine crosses the cut line it spans some x-interval. Unless that
    # interval is centred on cx, the 180-degree copy's interval lands somewhere
    # else and the union leaves a flat horizontal edge across the middle. Slide
    # the half sideways so the crossing is centred; the rotated copy then lands
    # on exactly the same interval and the two halves join invisibly.
    a, b = cut_span(lower, cy, x0, x1)
    lower = transformed(lower, Transform(1, 0, 0, 1, cx - (a + b) / 2, 0))

    # 180 degrees about the glyph centre turns the lower half into the upper one.
    upper = transformed(lower, Transform(-1, 0, 0, -1, 2 * cx, 2 * cy))

    out = pathops.Path()
    pathops.union([lower, upper], out.getPen())
    return out


def fit_to_tile(path):
    """Scale to GLYPH tall, centre on the tile, flip into SVG's y-down space."""
    x0, y0, x1, y1 = path.bounds
    scale = GLYPH / (y1 - y0)
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    mid = TILE / 2
    return transformed(
        path,
        Transform(scale, 0, 0, -scale, mid - scale * cx, mid + scale * cy),
    )


def to_svg_path(path):
    pen = SVGPathPen(None, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    path.draw(pen)
    return pen.getCommands()


def check(path):
    """The point of the whole exercise: the glyph must be 180-degree symmetric."""
    x0, y0, x1, y1 = path.bounds
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    turned = transformed(path, Transform(-1, 0, 0, -1, 2 * cx, 2 * cy))

    # The symmetric difference must vanish. An exact match gives either no bounds
    # at all or a degenerate (zero-extent) box, depending on the skia version.
    residue = pathops.Path()
    pathops.xor([path], [turned], residue.getPen())
    leftover = residue.bounds
    if leftover is not None:
        rx0, ry0, rx1, ry1 = leftover
        assert max(rx1 - rx0, ry1 - ry0) < 1e-3, (
            f"glyph is not point-symmetric, residue {leftover}"
        )

    mid_y = cy
    upper = pathops.Path()
    pathops.intersection([path], [band(mid_y, y1 + 10, x0, x1)], upper.getPen())
    lower = pathops.Path()
    pathops.intersection([path], [band(y0 - 10, mid_y, x0, x1)], lower.getPen())
    ux0, _, ux1, _ = upper.bounds
    lx0, _, lx1, _ = lower.bounds
    # 1e-3 of a 1000-unit em, i.e. loose enough for skia's float32 rounding.
    assert abs((ux1 - ux0) - (lx1 - lx0)) < 1e-3, (
        f"halves differ in width: {ux1 - ux0} vs {lx1 - lx0}"
    )

    # No step across the join: the spine must occupy the same x-interval on both
    # sides of the cut, or a flat horizontal edge shows through the middle.
    below = cut_span(path, mid_y, x0, x1)
    above = cut_span(path, mid_y, x0, x1, above=True)
    step = max(abs(below[0] - above[0]), abs(below[1] - above[1]))
    tolerance = (x1 - x0) * 0.01  # 1% of glyph width, i.e. curvature not a step
    assert step < tolerance, f"join steps by {step:.2f} units (max {tolerance:.2f})"

    print(
        f"ok: halves both {ux1 - ux0:.2f} units wide, point-symmetric, "
        f"join aligned to {step:.2f} units"
    )


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)

    glyph = symmetric_glyph(TTFont(sys.argv[1]))
    check(glyph)
    d = to_svg_path(fit_to_tile(glyph))
    mid = TILE / 2

    OUT.write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {TILE:.0f} {TILE:.0f}">\n'
        f"  <!-- Generated by scripts/gen-favicon.py — edit that, not this.\n"
        f"       Instrument Serif's 'S' with its wider lower half mirrored onto the top,\n"
        f"       centred on its own ink bbox and drawn twice a quarter turn apart, with\n"
        f"       the pair turned {TILT:g} degrees about the tile centre. -->\n"
        f'  <rect width="{TILE:.0f}" height="{TILE:.0f}" rx="6" fill="{BG}" />\n'
        f'  <g fill="{FG}" transform="rotate({TILT:g} {mid:.0f} {mid:.0f})">\n'
        f'    <path d="{d}" />\n'
        f'    <path d="{d}" transform="rotate(90 {mid:.0f} {mid:.0f})" />\n'
        f"  </g>\n"
        f"</svg>\n"
    )
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()
