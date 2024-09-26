// file for abstracting the goal item component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoalItem({ goal }) {
  return (
    <View style={styles.userInput}>
      <Text style={styles.text}>{goal.text}</Text>
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