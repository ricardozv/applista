import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#000111',
        borderRadius: 20,
        backgroundColor: '#162129',
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
        fontWeight:'bold',
        color:'#fff'

    },  
    quantity: {
        fontWeight:'bold',
        color:'#fff'
        
    }, 
    price: {
        color:'#fff',
        fontWeight:'bold',
        padding:5

    }, 
    totalPrice:{
        padding:5

    }
});

export default styles;