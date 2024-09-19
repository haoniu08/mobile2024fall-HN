// Import button here
import { Button, StyleSheet, TextInput, Text, View } from 'react-native'
import React, {useState} from 'react'

export default function Input( {autoFocus} ) {

  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);

  // The function logs what user has typed in the TextInput to console 
  function handleConfirm() {
    console.log(text);
  }

  return (
    <View>
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
  );
}

const styles = StyleSheet.create({})