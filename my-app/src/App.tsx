import { EuiGlobalToastList, EuiProvider, EuiThemeColorMode, EuiThemeProvider } from '@elastic/eui'
import React, { useEffect, useState } from 'react'
import "@elastic/eui/dist/eui_theme_light.json"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useAppDispatch, useAppSelector } from './app/hooks'
import ThemeSelector from './components/ThemeSelector'
import CreateMeeting from './pages/CreateMeeting'
import OneOnOneMeeting from './pages/OneOnOneMeeting'
import { setToasts } from './app/slices/MeetingSlice'
import { rm } from 'fs'

function App() {
  const dispatch = useAppDispatch()
  const isDarkTheme = useAppSelector((zoom) => zoom.auth.isDarkTheme);
  const [theme, setTheme] = useState<EuiThemeColorMode>("light");
  const toasts=useAppSelector((zoom)=>zoom.meetings.toasts)
  const [isInitialTheme, setIsIntitalTheme] = useState(true)

  const removeToast=(removedToast:{id:string})=>{
    dispatch(
      setToasts(
        toasts.filter((toast:{id:string})=>toast.id !== removedToast.id)
      )
    )
  }

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
      DARK: { primary: "#0b5cff" },
    }
  }
  return (
    <ThemeSelector>
      <EuiProvider colorMode={theme}>
        <EuiThemeProvider modify={overrides}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='*' element={<Login />} />
            <Route path='/create' element={<CreateMeeting/>}/>
            <Route path='/create1on1' element={<OneOnOneMeeting/>}/>
            <Route path=''/>
          </Routes>
          <EuiGlobalToastList
          toasts={toasts}
          dismissToast={removeToast}
          toastLifeTimeMs={4000}/>
        </EuiThemeProvider>
      </EuiProvider>
    </ThemeSelector>
  )
}

export default App
