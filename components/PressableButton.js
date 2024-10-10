import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'

const PressableButton = ({ children, pressedFunction, componentStyle, pressedStyle }) => {
    return (
        <Pressable
            onPress={pressedFunction}
            style={({ pressed }) => [
                styles.defaultStyle,
                componentStyle,
                pressed && styles.defaultPressedStyle,
                pressed && pressedStyle
            ]}
        >
            <View>{children}</View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    defaultStyle: {
        backgroundColor: 'skyblue',
        padding: 5,
        borderRadius: 10,
    },
    defaultPressedStyle: {
        opacity: 0.7,
        backgroundColor: 'black',
    },
})

export default PressableButton