import { useCallback, useRef } from 'react'
import { flushSync } from 'react-dom'

import { cn } from '@/lib/utils'
import { useTheme } from '@/hooks/useTheme'
import { Button } from './button'
import { Theme } from '../icons'

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<'button'> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { toggleTheme: baseToggleTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        baseToggleTheme()
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    )
  }, [baseToggleTheme, duration])

  return (
    <Button
      variant="ghost"
      size="icon"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      aria-label="Toggle theme"
      {...props}
    >
      <Theme className="size-5.5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
