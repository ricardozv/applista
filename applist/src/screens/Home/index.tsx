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
            
            {/* Image */}
            <Image style = {styles.image} source = {{ uri:'https://imagekank.s3.amazonaws.com/the-week-rio.jpg'}} />

            {/* description */}
            <Text style={styles.description}>{product.descriptionHome}</Text>

        </View>
    );
};

export default ProductScreen;