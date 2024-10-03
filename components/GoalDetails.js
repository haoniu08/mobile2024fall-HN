import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function GoalDetails({navigation, route}) {

  console.log(route);
  
  function moreDetailsHandler() {
    navigation.push("Details");
  }

  return (
    <View>
    
      {route.params ? (
        <Text>
            Goal details: {"\n"} 
            Text: {route.params.goalData.text} {"\n"}
            Id: {route.params.goalData.id}
        </Text>
       ) : (
        <Text>show more details</Text>
       )}
       <Button title="More Details" onPress={moreDetailsHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({})