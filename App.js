import { StatusBar } from 'expo-status-bar';
import { 
  Button, 
  StyleSheet, 
  View, 
  Text,
  SafeAreaView, 
  FlatList, 
  Alert} from 'react-native';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import GoalItem from './components/GoalItem';

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
    const initialGoals = Array.from({ length: 10 }, (_, i) => ({
      text: `Goal ${i + 1}`,
      id: Math.random().toString(),
    }));
    setGoals(initialGoals);
  }, []);

  // define a function to handle the received data
  function handleReceivedData(data) {
    // setGoals((currentGoals) => [
    //   ...currentGoals,
    //   { text: data, id: Math.random()}
    // ]);
    // trying out Neda's way
    let newGoal = { text: data, id: Math.random().toString() };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
    setIsModalVisible(false);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function handleDeletedGoals(deletedId) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goalObj) => goalObj.id !== deletedId);
    });
  }

  function handleDeleteAllGoals() {
    Alert.alert(
      "Delete All Goals",
      "Are you sure you want to delete all goals?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => 
            setGoals([])
        }
      ]
    );
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
        {/* <test FlatList */}
        <FlatList
          contentContainerStyle={styles.scrollViewContainer}
          data={goals}
          renderItem={({ item }) => (
            <GoalItem deleteHandler={handleDeletedGoals} goalObj={item} />
          )}
          // to show a header "My Goal List" when user adds a goal
          ListHeaderComponent={goals.length > 0 ? (
            <Text style={styles.listPropText}>My Goal List</Text> 
          ) : null }
          // to show "no goals to show" when the list is empty
          ListEmptyComponent={
            <Text style={styles.listPropText}>No goals to show</Text>
          }
          // to show a footer button "Delete All" when there are goals
          ListFooterComponent={goals.length > 0 ? (
            <Button title="Delete All" onPress={handleDeleteAllGoals} />
          ) : null}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
  },
  topSection: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: '#dcd',
  },
  listPropText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    color: 'purple',
  },
});
