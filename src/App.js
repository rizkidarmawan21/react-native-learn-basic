import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Counter from './pages/Counter'
import SplashScreen from './pages/SplashScreen'
import { getData } from './storages/localStorage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="TabCounter" component={Counter} />
    </Tab.Navigator>
  );
}

const App = () => {

  // const [isSplash, setIsSplash] = useState(true)
  // const [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsSplash(false)
  //   }, 3000)

  //   getData('auth').then(async res => {
  //     if (res) {
  //       setIsLogin(true)
  //     }
  //   });
  // })

  return (
    <NavigationContainer initialRouteName="SplashScreen">
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App