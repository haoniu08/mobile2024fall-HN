import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// prop needs to be received here
export default function Header({ appName }) {
  return (
    <View>
      <Text>Welcome to my {appName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})