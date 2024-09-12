import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './comonents/Header';

export default function App() {

  const appName = "WaWaWeeWa";

  return (
    <View style={styles.container}>      
      <Header name={appName} >
        <Text>Header Children</Text>
        </Header>
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
