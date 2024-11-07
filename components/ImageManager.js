import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton'
import { useCameraPermissions } from 'expo-image-picker'


export default function ImageManager() {

    const [response, requestPermission] = useCameraPermissions();

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
    </View>
  )
}

const styles = StyleSheet.create({})