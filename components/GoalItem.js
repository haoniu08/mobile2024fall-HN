// file for abstracting the goal item component, rnfs
import React from 'react';
import { Button, View, Text, StyleSheet, Pressable } from 'react-native';

export default function GoalItem({ goalObj, deleteHandler, navigation }) {

  function handleDelete(){
    deleteHandler(goalObj.id);
  }

  function handlePress(){
    navigation.navigate('Details', { goalData: goalObj });
  }

  return (
    <Pressable
      onPress={handlePress}
      // add android_ripple prop
      android_ripple={{color: 'purple'}}
      // onLongPress={handleDelete}
    > 
      <View style={styles.userInput}>
        <Text style={styles.text}>{goalObj.text}</Text>
        <Button title="x" color="grey" onPress={handleDelete} />
      </View>
    </Pressable>
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