import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderColor: '#1E90FF',
        width:240,
        backgroundColor:'#1E90FF',
        fontSize:13, 
        borderRadius: 15,
        left:60, 
        height: 70

    },
    button: {
        width: 50,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#1E90FF',
        fontSize:18,
        borderRadius: 20

    },
    buttonText: {
        color:'#fff',
        fontSize:18,
        alignItems: 'center'
        
    },
    quantity: {
        color:'#fff',
        fontSize:15,
        alignItems: 'center'

    }
});

export default styles;