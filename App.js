import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'
import Signup from './components/SignupScreen'
import Login from './components/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { auth } from './Firebase/firebaseSetup';
import { onAuthStateChanged } from 'firebase/auth'

const Stack = createStackNavigator();

// function handleWarningPress () {
//   console.log("Warning")
// } 

const authStack = <>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Signup" component={Signup} />
</>

const appStack = <>
  <Stack.Screen name="My Goals" component={Home}/>
  <Stack.Screen 
    name="Details"
    component={GoalDetails}
    options={({route}) => {
      return {
        title: route.params ? route.params.goalData.text : "xxx",}
    }}
  />
</>

export default function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // need useEffect here to listen to the change of 
  useEffect ( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Signup'
        screenOptions={{
          headerStyle: { backgroundColor: "violet"},
          headerTintColor: "white",
        }}
      >
        {isUserLoggedIn ? appStack : authStack}
        
        {/* <Stack.Screen
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
        /> */}
      </ Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})