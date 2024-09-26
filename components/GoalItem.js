// file for abstracting the goal item component
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
      backgroundColor: 'skyblue',
      borderRadius: 5,
      marginVertical: 5,
    //   padding: 5,
    },
    text: {
      fontSize: 30,
      color: 'blue',
      padding: 5,
    },
  });