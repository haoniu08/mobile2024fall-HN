import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'

export default function GoalUsers() {
    
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('HTTP Error! status: ' + response.status);
        }
        const data = await response.json();

        setUsers(
            data.map((user) => {
                return user.name;
            })
        );
      } catch (error) {
        console.log("Error while fetching data: ", error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <View>
        <Text>Users:</Text>
        <FlatList 
          data={users}
          renderItem={({item}) => <Text>{item}</Text>}
        />
    </View>
  )
}

const styles = StyleSheet.create({})