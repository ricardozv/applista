import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 25,
        backgroundColor: '#00bfff',
        height: 145,

    },
    image: {
        width: 120,
        height: 120,

    },
    rightContainer:{
        padding:10,
        width:'100%',
        flex:1,
    },
    name: {
        fontWeight:'bold'

    },
    description: {
        fontWeight:'bold'

    },  
    quantity: {

    }, 
    price: {
        fontWeight:'bold',
        padding:5

    }, 
    totalPrice:{
        padding:5

    }
});

export default styles;