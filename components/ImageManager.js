import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton'
import { useCameraPermissions } from 'expo-image-picker'


export default function ImageManager() {

    const [response, requestPermission] = useCameraPermissions();

    const takeImageHandler = async () => {
        try {

            const result = await ImagePicker.launchCameraAsync();
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