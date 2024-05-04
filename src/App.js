import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Counter from './pages/Counter'
import SplashScreen from './pages/SplashScreen'
import { getData } from './storages/localStorage'

const App = () => {

  const [isSplash, setIsSplash] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false)
    }, 3000)

    getData('auth').then(async res => {
      if (res) {
        setIsLogin(true)
      }
    });
  })

  return (
    <>
      {/* <Home /> */}

      {/* <Login /> */}

      {/* <Counter /> */}

      {isSplash
        ?
        <SplashScreen />
        :
        (isLogin ? <Home /> : <Login />)
      }
    </>
  )
}

export default App