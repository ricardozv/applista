import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList  } from 'react-native';
import Products from '../../components/Products';
//import productList from '../../data/productList';
import { DataStore } from 'aws-amplify';
import {ProductList} from '../../models';

const ProductListX = ({searchValue}: {searchValue: string}) => {
    const [productList, setProductList] = useState<ProductList[]>([]);

    useEffect(()=> {
        const fetchProducts = async () => { 
        const results = DataStore.query(ProductList);
        setProductList(results);
        }

    })
    return (
        <View style = {styles.page}>
            <FlatList
              data={ProductListX}
              renderItem={({item}) => <Products item={item} />}
              showsVerticalScrollIndicator={false}
              />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding:10,
        backgroundColor: '#fff'
    }

});



export default ProductListX;