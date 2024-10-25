import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// prop needs to be received here (destructured), children needs not, only for example
export default function Header({name, children}) {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <Text
        style={[styles.textStyle, { paddingVertical: height < 415 ? 0 : 10 }]}
      >
        Welcome to {name}!
      </Text>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'purple',
    fontSize: windowWidth < 400 ? 20 : 26,
    borderColor: 'purple',
    borderWidth: 2,
    padding: 5,
    marginBottom: 10,
  }
})