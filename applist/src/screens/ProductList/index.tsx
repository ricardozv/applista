import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import Products from '../../components/Products';


const ProductList = () => {
    return (
        <View style = {styles.page}>
            <Products/>
          
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding:10,
    }

});



export default ProductList;