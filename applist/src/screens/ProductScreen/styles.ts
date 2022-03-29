import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    page: {
        padding:2,
        backgroundColor: "#1C1C1D",
        height:1000, 
        
    },
    name: {
        fontWeight:'bold',
        fontSize: 25,
        textAlign:'center',
        color:'#fff'

    },
    image: {
        width: 150,
        height: 260,
        alignSelf:'center',
        borderColor: '#000',
        padding:10
        
    },
    description: {
        textAlign:'center',
        height: 90,
        fontSize: 20,
        fontWeight:'bold',
        color:'#fff'

    },
    price: {
        fontWeight:'bold',
        padding:5,
        fontSize: 16,
        color:'#fff'

    }, 
    totalPrice:{
        padding:5,
        fontSize: 16,
        color:'#fff'
    },  
    quantity: {
        fontWeight:'bold',
        color:'#fff'
        
    },

});

export default styles;