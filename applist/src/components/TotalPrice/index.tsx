import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import styles from "./styles";

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


export default TotalPrice;