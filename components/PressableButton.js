import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const PressableButton = ({ children, pressedFunction, componentStyle }) => {
    return (
        <Pressable
            onPress={pressedFunction}
            style={({ pressed }) => [
                styles.defaultStyle,
                componentStyle,
                pressed && styles.pressedStyle
            ]}
        >
            <View>{children}</View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressedStyle: {
        opacity: 0.3,
        backgroundColor: 'purple',
    },
    defaultStyle: {
        backgroundColor: 'skyblue',
        padding: 5,
        borderRadius: 10,
    },
})

export default PressableButton