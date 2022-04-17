import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import GeoLocation from '@react-native-community/geolocation';

const Location = () => {
    const [latitude, setLatitude ] = useState(0.0);
    const [longitude, setLongitude] = useState(0.0);

    GeoLocation.getCurrentPosition(
        (pos) => {
            setLatitude(pos.coords.longitude);
            setLongitude(pos.coords.latitude)
        },
        (error) => Alert.alert("Error", error.message),
        {
            enableHighAccuracy: false, timeout: 120000, maximumAge: 1000
        }
    );

    return(
        <View style={styles.container}>
          <TouchableOpacity 
          onPress={Location}
          style={styles.button}>
            <Text style={styles.textButton}>Minha localização</Text>
          </TouchableOpacity>
            <Text style={styles.textLocation}>Localização atual:</Text>
            <Text style={styles.textLocation}>{latitude}, {longitude}</Text> 
        </View>
      );
};

const styles = StyleSheet.create({
  container : {
      display: 'flex', 
      padding:1,
      backgroundColor: "#fff",
      height:100, 
      
  },
  button: {
      borderRadius: 20,
      display: 'flex', 
      width: 130,
      height: 250,
      alignSelf:'center',
      borderColor: '#000'
      
  },
  textButton: {
      display: 'flex', 
      textAlign:'left',
      padding:10,
      height: 90,
      fontSize: 16,
      color:'#000'

  },
  textLocation: {
    display: 'flex', 
    textAlign:'left',
    padding:10,
    height: 60,
    fontSize: 16,
    color:'#000'

}

});


export default Location;

