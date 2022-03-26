import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

const ProductList = () => {
    return (
        <View style = {styles.page}>
          <View style = {styles.root}>
                <Image style = {styles.image} source = {{ uri: 'https://imagekank.s3.amazonaws.com/magnifica_269ml.png'}} />
                    <View style = {styles.rightContainer}>
                      <Text style={styles.name} numberOfLines = {1}>Magnifica</Text> 
                      <Text style={styles.quantity}>Uma cerveja delicios de São luís do Maranhão</Text>
                      <Text style={styles.price}>Uma cerveja delicios de São luís do Maranhão</Text>
                      <Text style={styles.totalPrice}>Uma cerveja delicios de São luís do Maranhão</Text> 
                    </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page:{
        width:'100%',
        padding:10,
    },
    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: 'white'

    },
    image: {
        width: 130,
        height: 130,

    },
    rightContainer:{
        padding:10,
        width:'100%',
        flex:1,
    },
    name: {
        fontWeight:'bold'

    }, 
    quantity: {

    }, 
    price: {

    }, 
    totalPrice:{

    }
});

export default ProductList;