import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderColor: '#000',
        width:350,
        backgroundColor:'#162129',
        fontSize:19, 
        borderRadius: 15,
        left:19, 
        height: 70

    },
    button: {
        width: 60,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#162129',
        fontSize:28,
        borderRadius: 20

    },
    buttonText: {
        color:'#fff',
        fontSize:28,
        alignItems: 'center'
        
    },
    quantity: {
        color:'#fff',
        fontSize:28,
        alignItems: 'center'

    }
});

export default styles;