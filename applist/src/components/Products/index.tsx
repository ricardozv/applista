import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Fontisco from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const Products = () => {
    return (
        <View style = {styles.root}>
                <Image style = {styles.image} source = {{ uri: 'https://imagekank.s3.amazonaws.com/magnifica_269ml.png'}} />
                    <View style = {styles.rightContainer}>
                      <Text style={styles.name} numberOfLines = {1}>Magnifica</Text> 
                      <Text style={styles.quantity}>Uma cerveja delicios de São luís do Maranhão</Text>
                      <Text style={styles.price}> Preço R$ 6.00 </Text>
                      <Text style={styles.totalPrice}>Uma cerveja delicios de São luís do Maranhão</Text> 
                    </View>
            </View>
        
    );
}


export default Products;
