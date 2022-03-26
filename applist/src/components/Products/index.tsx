import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

interface ProductsProps {
  item: {
    id: string;
    name: string;
    image: string;
    description: string;
    quantity: number; 
    price: number;
    totalPrice: number;
  }
}

const Products = ({ item }: ProductsProps) => {
    return (
        <View style = {styles.root}>
                <Image style = {styles.image} source = {{ uri: item.image}} />
                    <View style = {styles.rightContainer}>
                      <Text style={styles.name} numberOfLines = {1}>{item.name}</Text>
                      <Text style={styles.description} numberOfLines = {4}>{item.description}</Text>
                      <Text style={styles.quantity}numberOfLines = {3}>Quantidade: {item.quantity }</Text>
                      <Text style={styles.price}numberOfLines = {3}>Preço R${item.price}
                      {item.totalPrice && (
                        
                        <Text style={styles.totalPrice}>
                          Preço Total R${item.totalPrice}</Text>
                      )}
                        </Text>
                       
                    </View>
            </View>
        
    );
}


export default Products;
