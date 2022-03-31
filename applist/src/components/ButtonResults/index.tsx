import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () =>{};
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
        backgroundColor:'#162129',
        borderWidth:1,
        height:55,
        width: 260,
        padding:10,
        borderRadius: 15,
        borderColor: '#000',
        alignSelf:'center',
        marginVertical: 70,

    },
    text:{
       color:'#fff',
       fontSize:20,
       textAlign:'center',
       padding:5,
    }
});

export default ButtonResults;