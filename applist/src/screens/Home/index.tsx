import React, { useState } from "react";
import { View, Text, Image, Button } from 'react-native';
import styles from "./styles";
import product from "../../data/product";
import ButtonResults from "../../components/ButtonResults";


const ProductScreen = () => {
    const [selectQuantiti, setSelectQuantiti ] = useState(product.quantitiSelector[0]);
    const [quantity, setQuantity] = useState(0);
    return (
        <View style = {styles.page}>
            {/* Name */}
            <Text style={styles.name}>{product.name}</Text>
            
            {/* Image */}
            <Image style = {styles.image} source = {{ uri: product.image}} />

            {/* description */}
            <Text style={styles.description}>{product.description}</Text>

            {/* Button */}
            <ButtonResults text={"Navegar"} onPress={() =>{}} />
            

        </View>
    );
};

export default ProductScreen;