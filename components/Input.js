import { StyleSheet, TextInput, Text, View } from 'react-native'
import React, {useState} from 'react'

export default function Input( {autoFocus = false} ) {

  const [text, setText] = useState("");
  const [showCharCount, setShowCharCount] = useState(false);
  const [message, setMessage] = useState("");

  function updateText(newText) {
    setText(newText);
    setShowCharCount(true);
    setMessage("");
  }

  function handleBlur() {
    setShowCharCount(false);
    // show messages here checking if >= or < 3 characters
    if (text.length >= 3) {
        setMessage("Thank you")
    } else {
        setMessage("Please type more than 3 characters")
    }
  }
    
  return (
    <View>
      <TextInput 
        placeholder='Please enter the text here' 
        keyboardType='default' 
        style={{borderBottomColor: "purple", borderBottomWidth: 2}}
        value={text}
        onChangeText={updateText}
        onBlur={handleBlur}
        autoFocus={autoFocus}
      />
      {showCharCount && text.length > 0 && (
        <Text style={styles.charCount}>
            {text.length} characters
        </Text>
      )}
      {message.length > 0 && (
        <Text style={styles.message}>
            {message}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})