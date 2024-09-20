import { Button, Modal, StyleSheet, TextInput, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Input({ autoFocus, inputHandler, isModalVisible, onCancel }) {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);

  function handleConfirm() {
    inputHandler(text);
    // clear the text input
    setText("");
  }

  function handleCancelPress() {
    Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          // need to pass a function, not an object
          onPress: () => {
            onCancel();
            setText("");
          }
        }
      ]
    );
  }
  
  return (
    <Modal 
      animationType="slide" 
      transparent={true}
      visible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput 
            placeholder='Please enter the text here' 
            keyboardType='default' 
            style={styles.input}
            value={text}
            autoFocus={autoFocus}
            onChangeText={(changedText) => {
              setText(changedText);
            }}
            onBlur={() => {
              setBlur(true);
            }}
            onFocus={() => {
              setBlur(false);
            }}
          />
          {blur ? (
            text.length >= 3 ? (
              <Text>Thank you</Text>
            ) : (
              <Text>Please type more than 3 characters</Text>
            )
          ) : (
            text && <Text>{text.length}</Text>
          )}
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={handleCancelPress} />
            <Button title="Confirm" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </Modal>   
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    // flex properties are used here
    flexDirection: 'row',
    margin: 10,
    width: '30%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});