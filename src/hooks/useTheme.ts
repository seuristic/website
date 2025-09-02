import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then fallback to document class
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    // Fallback to system preference or document class
    return document.documentElement.classList.contains('dark')
  })

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    // Update document class
    if (newTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Save to localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      // Apply saved theme
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // No saved theme, check system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      if (prefersDark) {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
        localStorage.setItem('theme', 'light')
      }
    }
  }, [])

  // Listen for changes to the document class to keep state in sync
  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const target = mutation.target as HTMLElement
          const isDark = target.classList.contains('dark')
          setIsDarkMode(isDark)
          // Update localStorage to match document state
          localStorage.setItem('theme', isDark ? 'dark' : 'light')
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return {
    isDarkMode,
    toggleTheme,
  }
}
