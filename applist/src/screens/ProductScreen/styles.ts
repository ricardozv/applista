import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    page: {
        display: 'flex', 
        padding:2,
        backgroundColor: "#fff",
        height:1000, 
        
    },
    name: {
        display: 'flex', 
        fontWeight:'bold',
        fontSize: 25,
        textAlign:'center',
        color:'#1E90FF'

    },
    image: {
        display: 'flex', 
        width: 120,
        height: 200,
        alignSelf:'center',
        borderColor: '#1E90FF',
        padding:10
        
    },
    description: {
        textAlign:'center',
        padding:10,
        height: 60,
        fontSize: 20,
        fontWeight:'bold',
        color:'#fff'

    },
    price: {
        left:25,
        height: 15,
        fontWeight:'bold',
        padding:2,
        fontSize: 13,
        color:'#fff'

    }, 
    totalPrice:{
        justifyContent: 'center',
        padding:5,
        fontSize: 16,
        color:'#fff'
    },  
    quantity: {
        fontWeight:'bold',
        color:'#fff',
        alignItems:'center'
        
    },

});

export default styles;