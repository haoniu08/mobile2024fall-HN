import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import React, {Component, useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebaseSetup'
import { EmailAuthCredential } from 'firebase/auth/web-extension';

export default function SignupScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const loginHandler = () => {
    navigation.replace("Login");
  }

  const signupHandler = async () => {
    if (
      !email.length
      || !password.length
      || !confirmPassword.length
    ) {
      Alert.alert("All fields should be provided");
      return;
    }

    if (password != confirmPassword) {
      Alert.alert("Password and confirm password do not match!");
      return;
    }

    try {
      userCredentials = await createUserWithEmailAndPassword (
        auth,
        email,
        password
      )
      console.log(userCredentials);
    } catch (err) {
      console.log("create user", err);
      if (err.code === "auth/invalid-email ") {
        Alert.alert("Email address is invalid");
      } else if (err.code === "auth/missing-password") {
        Alert.alert("Password is missing");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={ (changedText) => {
          setEmail(changedText);
        }}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={ (changedText) => {
          setPassword(changedText);
        }}
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        value={confirmPassword}
        onChangeText={ (changedText) => {
          setConfirmpassword(changedText);
        }}
      />

      <Button title="Register" onPress={signupHandler}/>
      <Button title="Already registered? Login" onPress={loginHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({});