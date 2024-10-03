import { StyleSheet, Button } from 'react-native'
import React from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// trying out prop for lab 1, header styling
const headerTheme = {
  colors: {
    // background: 'rgb(55, 255, 255)',
    text: 'rgb(28, 28, 30)',
  }
}

export default function App() {
  return (
    <NavigationContainer theme={headerTheme}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            // headerStyle: {backgroundColor: "violet"},
            // headerTintColor: "white",
            title : "My Goals",
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={GoalDetails} 
          options={({route}) => {
            return {
              title: route.params ? route.params.goalData.text : "xxx",
              headerRight: () => {
                return (
                  <Button 
                    title="Warning" 
                    onPress={console.log("Warning")}
                  />                
              );}
            }
            
          }}
        />
      </ Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})