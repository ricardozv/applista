import React from "react";
import { View, Text, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
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
            <Text style={styles.description}>{product.description}</Text>

            {/* price */}
            <Text style={styles.price} numberOfLines = {3}>Preço R${product.price}</Text>
            
                <Text style={styles.totalPrice}>Preço Total R${product.totalPrice}</Text>
                    

            {/* Quantiti Selector */}
            <Text style={styles.quantity}>{product.quantitiSelector}</Text>
                <Picker>
                    <Picker.Item label = "1" value={1} />
                    <Picker.Item label = "2" value={2} />
                    <Picker.Item label = "3" value={3} />
                    <Picker.Item label = "5" value={4} />
                    <Picker.Item label = "6" value={5} />
                    <Picker.Item label = "7" value={6} />
                    <Picker.Item label = "8" value={7} />
                    <Picker.Item label = "9" value={8} />
                    <Picker.Item label = "10" value={9} />
                </Picker>
            {/* totalPrice */}

            {/* Buttons */}

        </View>
    );
};

export default ProductScreen;