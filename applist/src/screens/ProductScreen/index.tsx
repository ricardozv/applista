import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from "./styles";
import product from "../../data/product";

const ProductScreen = () => {
    const [selectQuantiti, setSelectQuantiti ] = useState(product.quantitiSelector[0]);
    return (
        <View style = {styles.page}>
            {/* Name */}
            <Text style={styles.name}>{product.name}</Text>
            
            {/* Image */}
            <Image style = {styles.image} source = {{ uri: product.image}} />

            {/* description */}
            <Text style={styles.description}>{product.description}</Text>

            {/* price */}
            <Text style={styles.price} numberOfLines = {3}>Preço R${product.price}</Text>
            
            {/* Quantiti Selector */}
            <Text style={styles.quantity}>{product.quantitiSelector}</Text>
                <Picker
                  key={product.id}
                  selectedValue={selectQuantiti}
                  onValueChange={( itemValue ) => 
                  setSelectQuantiti( itemValue )           
                }>
                    { product.quantitiSelector.map(option =>(
                    <Picker.Item label = {option} value={option} />
                    ))}
                </Picker>

            {/* totalPrice */}
            <Text style={styles.totalPrice}>Preço Total R${product.totalPrice}</Text>

            {/* Buttons */}

        </View>
    );
};

export default ProductScreen;