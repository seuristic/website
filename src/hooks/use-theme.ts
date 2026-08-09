import { useCallback, useState } from "react"

export type Theme = "light" | "dark"

/**
 * The initial theme is applied by the inline script in index.html (before first
 * paint), so this hook only has to read it back and keep it in sync.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  )

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark")
    localStorage.setItem("theme", next)
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(
    () =>
      setTheme(
        document.documentElement.classList.contains("dark") ? "light" : "dark",
      ),
    [setTheme],
  )

  return { theme, setTheme, toggleTheme }
}
