import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, {useState} from 'react'
import * as Location from 'expo-location';

export default function LocationManager() {
    const [response, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState(null);

    async function verifyPermission() {
        try {
            console.log(response);
            if (response.granted) {
                
                return true;
            }

            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        } catch (error) {
            console.log("error verifying permissions", error)
        }
    }

    async function handleLocateUser() {
        
        try {
            const hasPermission = await verifyPermission();
            if (!hasPermission) {
                Alert.alert(
                    "You need to grant location permissions to use location");
                return;
            }
            const locationResponse = await Location.getCurrentPositionAsync();
            console.log(locationResponse);
            setLocation({
                latitude: locationResponse.coords.latitude,
                longitude: locationResponse.coords.longitude
            });            
        } catch (error) {
            console.log("Error getting location", error);
        }
      }

  return (
    <View>
      <Button title="Locate User" onPress={handleLocateUser}/>
    </View>
  )
}

const styles = StyleSheet.create({})