import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'


const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} />
        {/* <Stack.Screen name='Welcome1' component={Welcome1} />
        <Stack.Screen name='Welcome2' component={Welcome2} />
        <Stack.Screen name='Welcome3' component={Welcome3} />
        <Stack.Screen name='Login' component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation