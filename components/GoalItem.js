// file for abstracting the goal item component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoalItem({ goalObj }) {
  return (
    <View key={goalObj.id} style={styles.userInput}>
      <Text style={styles.text}>{goalObj.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    userInput: {
      backgroundColor: 'skyblue',
      borderRadius: 100,
      marginVertical: 5,
      padding: 5,
    },
    text: {
      fontSize: 20,
      color: 'blue',
      padding: 5,
    },
  });