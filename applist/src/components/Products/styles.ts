import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    page:{
        padding: 10,
    },
    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: 'white'

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
    quantity: {

    }, 
    price: {
        fontWeight:'bold'

    }, 
    totalPrice:{

    }
});

export default styles;