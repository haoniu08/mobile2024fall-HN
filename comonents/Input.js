import { StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
// try to push to w2, 2nd try, 1st one failed
export default function Input() {

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
      />
  )
}

const styles = StyleSheet.create({})