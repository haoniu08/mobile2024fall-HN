import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native'
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
            if(location) {
                console.log(location);
            }           
        } catch (error) {
            console.log("Error getting location", error);
        }
      }

      if (location) {
        console.log(`https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`);
      }

  return (
    <View>
      <Button title="Locate User" onPress={handleLocateUser}/>
      { 
        location && 
        <Image 
            style={styles.image}
            source={{uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`}} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: window.width,
        height: 200
    }
})