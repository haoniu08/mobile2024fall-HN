import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import PressableButton from './PressableButton'
import { useCameraPermissions } from 'expo-image-picker'
import * as ImagePicker from 'expo-image-picker'


export default function ImageManager() {

    const [response, requestPermission] = ImagePicker.useCameraPermissions();
    const [imageUri, setImageUri] = useState("");

    async function verifyPermissions() {
        try {
            if (response.granted) {
                return true;
            }

            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        } catch (error) {
            console.log("error verifying permissions", error)
        }
    }

    const takeImageHandler = async () => {
        try {
            const hasPermission = await verifyPermissions();

            if (!hasPermission) {
                Alert.alert(
                    "You need to grant camera permissions to use camera");
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
            });

            if (!result.cancelled) {
                setImageUri(result.assets[0].uri);
            }
        } catch (error) {
            console.log("error taking img", error)
        }
    }

return (
    <View>
      <PressableButton
        children={<Text>Take Image</Text>}
        onPress={takeImageHandler}
      />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          alt="img from the camera"
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({})