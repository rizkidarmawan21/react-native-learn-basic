import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData } from './storages/localStorage'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';



const App = () => {
  return (
    <NavigationContainer initialRouteName="SplashScreen">
      <Router />
    </NavigationContainer>
  );
}

export default App