import { StyleSheet, TextInput, Text, View } from 'react-native'
import React, {useState} from 'react'

export default function Input( {autoFocus} ) {

  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);

  return (
    <View>
      <TextInput 
        placeholder='Please enter the text here' 
        keyboardType='default' 
        style={{borderBottomColor: "purple", borderBottomWidth: 2}}
        value={text}
        autoFocus={autoFocus}
        // onChangeText={updateText}
        onChangeText={ (changedText) => {
          setText(changedText);
        }}
        // onBlur={handleBlur}
        onBlur={ () => {
          setBlur(true);
        }}
        onFocus={ () => {
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
    </View>
  );
}

const styles = StyleSheet.create({})