import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
  const onPress = () =>{
    navigation.navigate("ProductScreen");
  }
    return (
        <Pressable onPress={onPress} style = {styles.root}>
                <Image style = {styles.image} />
                    <View style = {styles.rightContainer}>
                      <Text style={styles.name} numberOfLines = {1}></Text>
                      <Text style={styles.description} numberOfLines = {4}></Text>
                      <Text style={styles.quantity}numberOfLines = {3}></Text>
                      <Text style={styles.price}numberOfLines = {3}>
                      {/*{item.totalPrice && (
                        <Text style={styles.totalPrice}>
                          Preço Total R${item.totalPrice}</Text>
                      )} */}
                        </Text>
                        <Text style={styles.totalPrice}></Text>
                       
                    </View>
            </Pressable>
        
    );
}


export default Products;
