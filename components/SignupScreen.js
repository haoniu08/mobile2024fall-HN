import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import React, {useState} from 'react';

export default function SignupScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const loginHandler = () => {
    navigation.replace("Login");
  }

  const signupHandler = async () => {};

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