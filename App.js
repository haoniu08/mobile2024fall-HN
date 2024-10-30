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
import Profile from './components/Profile'
import PressableButton from './components/PressableButton'
import AndDesign from "@expo/vector-icons/AntDesign"

const Stack = createStackNavigator();

// function handleWarningPress () {
//   console.log("Warning")
// } 

const authStack = (<>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Signup" component={Signup} />
</>
);

const appStack = (
  <>
    <Stack.Screen 
      name="My Goals"
      component={Home}
      options={({navigation}) => {
        return {
          headerRight: () => {
            return (
              <PressableButton
                componentStyle={{backgroundColor: "purple"}}
                pressHandler= {() => {
                  navigation.navigate("Profile");
                }}
              >
                <AndDesign name='user' size={20} color="white"/>
              </PressableButton>
            );
          }
        }
      }}
    />
    <Stack.Screen 
      name="Details"
      component={GoalDetails}
      options={({route}) => {
        return {
          title: route.params ? route.params.goalData.text : "xxx",}
      }}
    />
    <Stack.Screen name="Profile" component={Profile}/>
  </>
);

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