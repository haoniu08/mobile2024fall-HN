import { StyleSheet } from 'react-native'
import React from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'
import Signup from './components/SignupScreen'
import Login from './components/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// function handleWarningPress () {
//   console.log("Warning")
// } 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: "violet"},
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="My Goals" 
          component={Home} 
        />
        <Stack.Screen 
          name="Details" 
          component={GoalDetails} 
          options={({route}) => {
            return {
              title: route.params ? route.params.goalData.text : "xxx",}
          }}
        />
      </ Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})