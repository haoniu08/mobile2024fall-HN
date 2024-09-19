import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// prop needs to be received here (destructured), children needs not, only for example
export default function Header({name, children}) {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to {name}</Text>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'purple',
    fontSize: 25,
    borderColor: 'purple',
    borderWidth: 2,
    padding: 5,
    marginBottom: 10,
  }
})