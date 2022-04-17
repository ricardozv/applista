import React from 'react';
import {View, StyleSheet  } from 'react-native';
import Geolocation from '../../components/Geolocation';

const Map = () => {

    return (
        <View style ={styles.container}>
            <Geolocation />
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        padding:100,
        backgroundColor: '#000'
    }

});



export default Map;