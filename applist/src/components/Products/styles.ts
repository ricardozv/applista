import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#535353',
        borderRadius: 20,
        backgroundColor: '#535353',
        height: 170

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