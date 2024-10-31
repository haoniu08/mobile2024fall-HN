import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import {auth} from '../Firebase/firebaseSetup'
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = () => {
    navigation.replace("Signup");
  };

  
  const loginHandler = async () => {
    if (!email.length) {
      Alert.alert("Email cannot be null");
      return;
    } else if (!password.length) {
      Alert.alert("Password cannot be null");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Email address is invalid");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Password should be at least 6 characters");
      return;
    }

    try {
      const userCredentials = await signInWithEmailAndPassword (
        auth,
        email,
        password
      );
      console.log(userCredentials.user);
    } catch (err) {
      console.log("Sign in error:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder='Please enter your email'
        style={styles.input}
        value={email}
        onChangeText={(changedText) => {
          setEmail(changedText)
        }}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder='Please enter your password'
        style={styles.input}
        value={password}
        secureTextEntry={true}
        onChangeText={(changedText) => {
          setPassword(changedText)
        }}
      />
      <Button title="Login" onPress={loginHandler}/>
      <Button title='Do not have an account yet? Create an account' onPress={signupHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({})