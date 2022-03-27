import React from "react";
import { View, Text, Image } from 'react-native';
import styles from "./styles";
import product from "../../data/product";

const ProductScreen = () => {
    return (
        <View>
            <Text style={styles.name}>{product.name}</Text>
            {/* Name */}

            {/* Image */}
            <Image style = {styles.image} source = {{ uri: product.image}} />

            {/* description */}

            {/* price */}
            <Text style={styles.price} numberOfLines = {3}>Preço R${product.price}</Text>
            
                <Text style={styles.totalPrice}>Preço Total R${product.totalPrice}</Text>
                    

            {/* Quantiti Selector */}
            <Text style={styles.quantity}>{product.quantitiSelector}</Text>
          {/*  <Picker>
            
                </Picker> */}
            {/* totalPrice */}

            {/* Buttons */}

        </View>
    );
};

export default ProductScreen;