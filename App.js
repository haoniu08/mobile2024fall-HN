import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {

  const appName = "Don Baguette";
  // define a state variable to store the received data
  const [receivedData, setReceivedData] = useState("");

  // define a function to handle the received data
  function handleReceivedData(data) {
    // console.log("App.js", data);, still prints out at the terminal
    setReceivedData(data);
  }

  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <Header name={appName} /> 
      <Input autoFocus={true} inputHandler={handleReceivedData}/>
      <Text>{receivedData}</Text>
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
