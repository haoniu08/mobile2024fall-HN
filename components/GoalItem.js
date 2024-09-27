// file for abstracting the goal item component, rnfs
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function GoalItem({ goalObj, deleteHandler }) {

  function handleDelete(){
    deleteHandler(goalObj.id);
  }

  return (
    <View style={styles.userInput}>
      <Text style={styles.text}>{goalObj.text}</Text>
      <Button title="x" color="grey" onPress={handleDelete} />
      {/* <Can be onPress={() => onDelete(goalObj.id)}>  */}
    </View>
  );
}

const styles = StyleSheet.create({
    userInput: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'darkgrey',
      borderRadius: 5,
      marginVertical: 5,
    },
    text: {
      fontSize: 30,
      color: 'purple',
      padding: 5,
    },
  });