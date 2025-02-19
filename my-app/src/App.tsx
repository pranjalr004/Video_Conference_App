import { EuiProvider, EuiThemeColorMode, EuiThemeProvider } from '@elastic/eui'
import React, { useEffect, useState } from 'react'
import "@elastic/eui/dist/eui_theme_light.json"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useAppDispatch, useAppSelector } from './app/hooks'
import ThemeSelector from './components/ThemeSelector'
import CreateMeeting from './pages/CreateMeeting'

function App() {
  const dispatch = useAppDispatch()
  const isDarkTheme = useAppSelector((zoom) => zoom.auth.isDarkTheme);
  const [theme, setTheme] = useState<EuiThemeColorMode>("light");
  const [isInitialTheme, setIsIntitalTheme] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("zoom-theme")
    if (theme) {
      setTheme(theme as EuiThemeColorMode)
    }
    else {
      localStorage.setItem("zoom-theme", "light")
    }
  }, [])

  useEffect(() => {
    if (isInitialTheme) setIsIntitalTheme(false)
    else {
      window.location.reload()
    }
  }, [isDarkTheme])

  const overrides = {
    colors: {
      LIGHT: { primary: "0b5cff" },
      DARK: { secondary: "#1D2F53" },
    }
  }
  return (
    <ThemeSelector>
      <EuiProvider colorMode={theme}>
        <EuiThemeProvider modify={overrides}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='*' element={<Dashboard />} />
            <Route path='/create' element={<CreateMeeting/>}/>
          </Routes>
        </EuiThemeProvider>
      </EuiProvider>
    </ThemeSelector>
  )
}

export default App
