import { StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'

export default function Input( {autoFocus = false} ) {

  const [text, setText] = useState("");

  function updateText(newText) {
    setText(newText);
  }
    
  return (
      <TextInput 
        placeholder='Please enter the text here' 
        keyboardType='default' 
        style={{borderBottomColor: "purple", borderBottomWidth: 2}}
        value={text}
        onChangeText={updateText}
        autoFocus={autoFocus}
      />
  )
}

const styles = StyleSheet.create({})