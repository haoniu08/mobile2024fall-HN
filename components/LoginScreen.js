import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'


export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = () => {
    navigation.replace("Signup");
  };

  const loginHandler = () => {};

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