import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react';

export default function GoalDetails({navigation, route}) {
  
  const [textColor, setTextColor] = useState("black");

  console.log(route);

  function handleWarningPress() {
    setTextColor("red");
    navigation.setOptions({ 
      title: "Warning!",
    });
  }
  
  function moreDetailsHandler() {
    navigation.push("Details");
  }

  navigation.setOptions({
    headerRight: () => (
      <Button 
        title="Warning" 
        onPress={handleWarningPress}
      />
    ),
  });

  return (
    <View>
    
      {route.params ? (
        <Text style={{ color: textColor }}>
            Goal details: {"\n"} 
            Text: {route.params.goalData.text} {"\n"}
            Id: {route.params.goalData.id}
        </Text>
       ) : (
        <Text style={{ color: textColor }}>show more details</Text>
       )}
       <Button title="More Details" onPress={moreDetailsHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({})