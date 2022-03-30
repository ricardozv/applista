import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const TotalPrice = ({quantity, setQuantity}) => {
    const subtraction = () => {
        setQuantity(Math.max(0, quantity - 1));
    };

    const addition = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style = {styles.root}>
            <Pressable onPress={subtraction} style={styles.button}>
              <Text style={styles.buttonText}> - </Text>
            </Pressable>

              <Text style={styles.quantity}>{quantity}</Text>

            <Pressable onPress={addition} style={styles.button}>
              <Text style={styles.buttonText}> + </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor: '#000',
        width:350,
        backgroundColor:'#162129',
        fontSize:19, 
        borderRadius: 20, 
        height: 70


    },
    button: {
        width: 60,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#162129',
        fontSize:25,
        borderRadius: 20

    },
    buttonText: {
        color:'#fff',
        fontSize:25,
        alignItems: 'center'
        

    },
    quantity: {
        color:'#fff',
        fontSize:20,
        alignItems: 'center'

    }
});

export default TotalPrice;