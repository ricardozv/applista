import React from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () =>{};
}

const ButtonResults = ({ text, onPress }: ButtonProps) => {
    return (
        <Pressable onPress={onPress}>
            <Text>{text}</Text>
        </Pressable>
    )
}