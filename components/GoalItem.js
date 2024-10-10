// file for abstracting the goal item component, rnfs
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PressableButton from './PressableButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      android_ripple={{color: 'purple', radius: 20}}
      // use style prop to add visual style on IOS
      style = {({ pressed }) => [
        styles.pressable, 
        // let the pressed style override the default style, if pressed
        pressed && styles.pressedStyle
      ]}
    > 
      <View style={styles.userInput}>
        <Text style={styles.text}>{goalObj.text}</Text>
        <PressableButton
          pressedFunction={handleDelete} 
          componentStyle={styles.buttonStyle}
          pressedStyle={styles.pressedStyle}
        >
          <AntDesign name="delete" size={18} color="black" style={styles.iconStyle}/>
        </PressableButton>
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
    pressable : {
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 10,
    },
    // overide the default pressed style of button
    pressedStyle: {
      opacity: 0.5,
      backgroundColor: 'yellow',
    },
    // overide the default style of button
    buttonStyle: {
      backgroundColor: 'red',
      // padding: 5,
      borderRadius: 10,
    },
    iconStyle: {
      backgroundColor: 'lime',
    }
  });