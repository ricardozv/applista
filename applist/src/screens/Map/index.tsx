import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text  } from 'react-native';
import Products from '../../components/Products';
//import productList from '../../data/productList';
import { DataStore } from 'aws-amplify';
import {ProductList} from '../../models';

const Map = () => {
        
    return (
        <View style = {styles.page}>
            <Text>
                Maps
            </Text>
           
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        padding:100,
        backgroundColor: '#000'
    }

});



export default Map;