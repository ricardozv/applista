import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#f1f1f1',
        borderRadius: 20,
        backgroundColor: '#1E90FF',
        height: 145,

    },
    image: {
        width: 115,
        height: 115,

    },
    rightContainer:{
        padding:22,
        width:'100%',
        flex:1,
        color:'#fff'
    },
    name: {
        fontWeight:'bold',
        color:'#fff',
        fontSize: 17

    },
    description: {
        color:'#fff'

    },  
    quantity: {
        color:'#fff'
        
    }, 
    price: {
        color:'#fff',
        fontWeight:'bold',
        padding:3,
        fontSize: 17

    }, 
    totalPrice:{
        padding:5

    }
});

export default styles;