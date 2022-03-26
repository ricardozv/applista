import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#f0ffff',
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 170,

    },
    image: {
        width: 130,
        height: 130,

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