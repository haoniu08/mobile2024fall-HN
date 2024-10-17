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
import Header from './Header.js'
import Input from './Input';
import GoalItem from './GoalItem';
import { database } from '../Firebase/firebaseSetup';
import { writeToDB } from '../Firebase/firestoreHelper';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Home({ navigation }) {

  console.log(database);

  const appName = "Don Baguette";
  // define a state variable to store the received data
  const [receivedData, setReceivedData] = useState("");
  // set the initial state of the modal to false
  const [isModalVisible, setIsModalVisible] = useState(false);
  // use array to store multiple goals instead just one text
  const [goals, setGoals] = useState([]);

  const collectionName = "Goals";

  // function to generate 40 goal, to test the scroll view
  // useEffect(() => {
  //   const initialGoals = Array.from({ length: 10 }, (_, i) => ({
  //     text: `Goal ${i + 1}`,
  //     id: Math.random().toString(),
  //   }));
  //   setGoals(initialGoals);
  // }, []);

  // useEffect to read data from firebase, listen to real-time changes
  useEffect(()=>{
    // querySnapshot is a list/array of documentSnapshots
    onSnapshot(collection(database, collectionName), (querySnapshot) => {
      // define an array here
      goalList = [];
      querySnapshot.forEach((docSnapShot) => {
        // populate the array
        // console.log(docSnapShot.data());
        goalList.push(docSnapShot.data());
      })
      // set the goals array to the array
      setGoals(goalList);
    });
  },[]);

  // the function handles goal detail on press
  function handleGoalPress (pressedGoal) {
    // receive the goal obj, and print out the info
    console.log("Goal Id:", pressedGoal.id, "Goal Text:", pressedGoal.text)
    // nevi to GoalDetails and pass goal obj as params
    navigation.navigate("Details", {goalData: pressedGoal});
  }

  // define a function to handle the received data
  function handleReceivedData(data) {
    // setGoals((currentGoals) => [
    //   ...currentGoals,
    //   { text: data, id: Math.random()}
    // ]);

    // trying out Neda's way
    let newGoal = { text: data};

    // writing to firebase
    writeToDB(newGoal, collectionName);

    // setGoals((prevGoals) => {
    //   return [...prevGoals, newGoal];
    // });
    setIsModalVisible(false);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function handleDeletedGoals(deletedId) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goalObj) => { 
        return goalObj.id !== deletedId}
      );
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
          renderItem={({ item, separators }) => {
            return (
              <GoalItem 
                pressHandler={handleGoalPress}
                deleteHandler={handleDeletedGoals}
                goalObj={item}
                // enables navigation directly from goalItems
                navigation={navigation}
                separators={separators}
              />
            );
          }}
          // to show a header "My Goal List" when user adds a goal
          ListHeaderComponent={
            goals.length && <Text style={styles.listPropText}>My Goal List</Text> 
          }
          // to show "no goals to show" when the list is empty
          ListEmptyComponent={
            <Text style={styles.listPropText}>No goals to show</Text>
          }
          // to show a footer button "Delete All" when goals.length > 0
          ListFooterComponent={goals.length > 0 ? (
              <Button title="Delete All" onPress={handleDeleteAllGoals} />
            ) : null
          }
          // to show a separator between each goal, but not at the top or bottom
          ItemSeparatorComponent={({ highlighted }) => 
          <View 
            style={[
              styles.goalSeparator, 
              highlighted && styles.highlightedSeparator,
            ]} 
          />
          }
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
  goalSeparator: {
    height: 0.5,
    width: 'auto',
    backgroundColor: 'grey',
    padding: 2,
    marginVertical: 10,
  }, 
  highlightedSeparator: {
    backgroundColor: 'red',
  }
});