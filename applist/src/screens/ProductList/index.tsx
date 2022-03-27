import React from 'react';
import {View, StyleSheet, FlatList  } from 'react-native';
import Products from '../../components/Products';
import productList from '../../data/productList';


const ProductList = () => {
    return (
        <View style = {styles.page}>
            <FlatList
              data={productList}
              renderItem={({item}) => <Products item={item} />}
              showsVerticalScrollIndicator={false}
              />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding:10,
        backgroundColor: '#1C1C1D'
    }

});



export default ProductList;