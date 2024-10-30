import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { auth } from '../Firebase/firebaseSetup'
import { signOut } from 'firebase/auth'
import PressableButton from './PressableButton'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Profile({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight:() => (
        <PressableButton
          pressHandler={() => {
            signOut(auth).then(() => {
              navigation.navigate("Login")
            })
          }}
        >
          <AntDesign name='logout' size={20} color="white"/>
        </PressableButton>
      ),
    })
  }, [navigation]);

  return (
    <View>
      <Text>{auth.currentUser.email}</Text>
      <Text>{auth.currentUser.uid}</Text>
    </View>
  )
}
const styles = StyleSheet.create({});