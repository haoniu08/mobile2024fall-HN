import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { writeToDB, readAllDocs } from '../Firebase/firestoreHelper';

export default function GoalUsers({ id }) {
    
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async function returns a promise, so we need to define this new function
    async function fetchData() {
      try {

        // check if there is already any user exists, by calling readAllDocs
        const dataFromDB = await readAllDocs(`Goals/${id}/users`);

        if (dataFromDB.length) {
          setUsers(
            dataFromDB.map((user) => {
              return user.name;
            })
          );
          return;
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        
        if (!response.ok) {
          throw new Error(`HTTP Error! status: ${response.status}`);
        }
        
        // we only get here if response is ok
        const data = await response.json();
        console.log(`data is: ${data}`);

        // sub-collection needs to be manually deleted
        data.forEach((user) => writeToDB(user, `Goals/${id}/users`));
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

  // const handlePostRequest = async () => {

  //   if (users.length == 0) {
  //     console.log("Not any user info available to be sent in the POST request");
  //     return
  //   }

  //   const testUser = users[0];

  //   try {
  //     const response  = await fetch('/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(testUser)
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP Error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log('POST request result:',result);

  //   } catch (error) {
  //     console.log("Error while posting data: ", error);
  //   }
  // }
  
  return (
    <View>
        <Text>Users:</Text>
        <FlatList 
          data={users}
          // keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Text>{item}</Text>}
        />
        
        {/* <Button title='Send POST Rquest' onPress={handlePostRequest}/> */}
    </View>
  )
}

const styles = StyleSheet.create({})