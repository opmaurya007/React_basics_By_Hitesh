import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'


function App() {
  const [themeMode, setThemeMode]=useState("light")
  
  const lightTheme=()=>{
    setThemeMode('light')
  }

  const darkTheme=()=>{
    setThemeMode('dark')
  }

  // actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  


  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className='flex flex-arap min-h-sceen items-center'>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto flex item-center justify-end mb-4'>

        </div>

        <div className='w-full max-w-sm mx-auto'>

        </div>
      </div>
    </div>
     
    </ThemeProvider>
  )
}

export default App
