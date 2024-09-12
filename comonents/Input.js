import { StyleSheet, TextInput, Text, View } from 'react-native'
import React, {useState} from 'react'

export default function Input( {autoFocus = false} ) {

  const [text, setText] = useState("");

  function updateText(newText) {
    setText(newText);
  }
    
  return (
    <View>
      <TextInput 
        placeholder='Please enter the text here' 
        keyboardType='default' 
        style={{borderBottomColor: "purple", borderBottomWidth: 2}}
        value={text}
        onChangeText={updateText}
        autoFocus={autoFocus}
      />
      {text.length > 0 && (
        <Text style={styles.charCount}>
            {text.length} characters
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})