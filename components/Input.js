// Import button here
import { Button, Modal, StyleSheet, TextInput, Text, View } from 'react-native'
import React, {useState} from 'react'

// add inputHandler here
export default function Input( {
  autoFocus,
  inputHandler, 
  isModalVisible,
} ) {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);

  // The function logs what user has typed in the TextInput to console 
  function handleConfirm() {
    // add inputHandler here
    inputHandler(text);
  }

  return (
    // just wrapping everything in a Modal
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.container}>
        <TextInput 
          placeholder='Please enter the text here' 
          keyboardType='default' 
          style={{borderBottomColor: "purple", borderBottomWidth: 2}}
          value={text}
          autoFocus={autoFocus}
          // onChangeText={updateText}, removed
          onChangeText={ (changedText) => {
            setText(changedText);
          }}
          // onBlur={handleBlur}, original function removed
          onBlur={ () => {
            setBlur(true);
          }}
          // This makes the character count appear again when user starts to type
          onFocus={ () => {
            setBlur(false);
          }}
        />
        {/* The code (Neda) replaces the original function - handle blur etc. */}
        {blur ? (
          text.length >= 3 ? (
            <Text>Thank you</Text>
          ) : (
            <Text>Please type more than 3 characters</Text>
          )
        ) : (
          text && <Text>{text.length}</Text>
        )}
        {/* The confirm button & onPress prop (event handler) */}
        {/* onPress accepts a function as its value */}
        <Button title="Confirm" onPress={handleConfirm} />
      </View>
    </Modal>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});