import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Counter from './pages/Counter'
import SplashScreen from './pages/SplashScreen'

const App = () => {

  const [isSplash, setIsSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false)
    }, 3000)
  })

  return (
    <>
      {/* <Home /> */}

      {/* <Login /> */}

      {/* <Counter /> */}

      {isSplash ? <SplashScreen /> : <Login />}
    </>
  )
}

export default App