import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import useSettings from '../hooks/useSettings'

function GlobalThemeProvider({ children }) {
  const { settings } = useSettings()
  const activeTheme = { ...settings.themes[settings.activeTheme] }
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default GlobalThemeProvider
