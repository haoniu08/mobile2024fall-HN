import { Button, Modal, StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function Input({ autoFocus, inputHandler, isModalVisible }) {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);

  function handleConfirm() {
    inputHandler(text);
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
            style={{borderBottomColor: "purple", borderBottomWidth: 2}}
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
            <Button title="Confirm" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </Modal>   
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    width: '30%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});