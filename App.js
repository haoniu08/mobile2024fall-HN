import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerStyle: {backgroundColor: "violet"},
            headerTintColor: "white",
            title : "My Goals",
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={GoalDetails} 
          options={({route}) => {
            return {
              title: route.params ? route.params.goalData.text : "More Details",
            }
          }}
        />
      </ Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})