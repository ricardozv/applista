import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void;
}

function ButtonResults({ text, onPress }: ButtonProps) {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor:'#1E90FF',
        borderWidth:1,
        height:50,
        width: 200,
        padding:3,
        borderRadius: 15,
        borderColor: '#1E90FF',
        alignSelf:'center',
        marginVertical: 40,

    },
    text:{
       color:'#fff',
       fontSize:15,
       textAlign:'center',
       padding:5,
    }
});

export default ButtonResults;