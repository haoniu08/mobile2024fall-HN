import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useLayoutEffect, useEffect } from 'react';
import PressableButton from './PressableButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { updateGoalWarning } from '../Firebase/firestoreHelper';
import GoalUser from './GoalUsers';
import { getDownloadURL, ref } from 'firebase/storage';

export default function GoalDetails({navigation, route}) {
  
  const [textColor, setTextColor] = useState("black");
  const goalId = route.params.goalData.id;
  cosnt [downloadImageURL, setdownloadImageURL] = useState("");


  console.log(route);

  function handleWarningPress() {
    setTextColor("red");
    navigation.setOptions({ 
      title: "Warning!",
    });
    updateGoalWarning(goalId, "Goals")
  }
  
  function moreDetailsHandler() {
    navigation.push("Details");
  }

  // fixing Cannot update a component (`StackNavigator`) 
  // while rendering a different component (`GoalDetails`)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (

        // replace button with PressableButton
        <PressableButton 
          pressedFunction={handleWarningPress} 
          componentStyle={styles.buttonStyle}
        >
          <AntDesign name="warning" size={20} color="black" style={styles.warningButton}/>
        </PressableButton>

        // <Button 
        //   title="Warning" 
        //   onPress={handleWarningPress}
        // />
      ),
    });
  }, [navigation]);
  useEffect (() => {
    async function getImageDownloadURL() {
      try {
        if (route.params && route.params.goalObj.imageUri) {
          const ImageRef = ref(storage, route.params.goalObj.imageUri);
          const downloadURL = await getDownloadURL(ImageRef);      
        }
      } catch (error) {
        console.log("error getting image download URL", error);
      }
    }
    getImageDownloadURL();
  });


  return (
    <View>
      {route.params ? (
        <Text style={{ color: textColor }}>
            Goal details: {"\n"} 
            Text: {route.params.goalData.text} {"\n"}
            Id: {goalId}
        </Text>
       ) : (
        <Text style={{ color: textColor }}>show more details</Text>
       )}
       <Button title="More Details" onPress={moreDetailsHandler}/>

       {route.params && <GoalUser id={goalId}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  // overiding the default button style
  buttonStyle: {
    backgroundColor: 'gray',
  },
  warningButton: {
    backgroundColor: 'red',
  }
})