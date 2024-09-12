import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './comonents/Header';
import Input from './comonents/Input';

export default function App() {

  const appName = "WaWaWeeWa";

  return (
    <View style={styles.container}>      
      <Header name={appName} />
      <Input autoFocus={true}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
