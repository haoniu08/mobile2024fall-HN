import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {

  const appName = "Don Baguette";
  // define a state variable to store the received data
  const [receivedData, setReceivedData] = useState("");
  // set the initial state of the modal to false
  const [isModalVisible, setIsModalVisible] = useState(false);
  // use array to store multiple goals instead just one text
  const [goals, setGoals] = useState([]);

  // function to generate 40 goal, to test the scroll view
  useEffect(() => {
    const initialGoals = Array.from({ length: 40 }, (_, i) => ({
      text: `Goal ${i + 1}`,
      id: Math.random().toString(),
    }));
    setGoals(initialGoals);
  }, []);

  // define a function to handle the received data
  function handleReceivedData(data) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: data, id: Math.random()}
    ]);
    setIsModalVisible(false);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>      
        <StatusBar style="auto" />
        <Header name={appName} /> 
        {/* <Input autoFocus={true} inputHandler={handleReceivedData}/> */}
        <View style={styles.buttonContainer}> 
          <Button 
            title="Add a Goal" 
            onPress={function () {
              setIsModalVisible(true);
            }} 
          />
        </View>
        <Input 
          autoFocus={true} 
          inputHandler={handleReceivedData} 
          isModalVisible={isModalVisible}
          onCancel={hideModal}
        />
      </View>
      <View style={styles.bottomSection}>
        {/* {about to add ScrollView here} */}
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {goals.map((goalObj) => {
            return (
              <View key={goalObj.id} style={styles.userInput}>
                <Text style={styles.text}>{goalObj.text}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
    padding: 5,
  },
  userInput: {
    backgroundColor: 'skyblue',
    borderRadius: 100,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  topSection: {
    flex: 1,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10,
    width: "30%",
  },
  bottomSection: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcd',
  },
});
