import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalDetails({route}) {
  return (
    <View>
      <Text>
        Goal details: {"\n"} 
        text: {route.params.goalData.text} {"\n"}
        id: {route.params.goalData.id}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})