import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './comonents/Header';
import { useState } from 'react';

export default function App() {

  const appName = "WaWaWeeWa";
  const [text, setText] = useState("");


  return (
    <View style={styles.container}>      
      <Header name={appName} />
      <TextInput 
        placeholder='Please enter the text here' 
        keyboardType='default' 
        style={{borderBottomColor: "purple", borderBottomWidth: 2}}
        value={text}
        onChangeText={function (ChangeText) {
          setText(ChangeText);
        }}
      />
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
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
