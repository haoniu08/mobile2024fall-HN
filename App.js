import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {

  const appName = "Don Baguette";
  // define a state variable to store the received data
  const [receivedData, setReceivedData] = useState("");
  // set the initial state of the modal to false
  const [isModalVisible, setIsModalVisible] = useState(false);

  // define a function to handle the received data
  function handleReceivedData(data) {
    // console.log("App.js", data);, still prints out at the terminal
    setReceivedData(data);
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <Header name={appName} /> 
      {/* <Input autoFocus={true} inputHandler={handleReceivedData}/> */}
      <Button 
        title="Add a Goal" 
        onPress={function () {
          setIsModalVisible(true);
        }} 
      />
      <Input 
        autoFocus={true} 
        inputHandler={handleReceivedData} 
        isModalVisible={isModalVisible}
      />
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
