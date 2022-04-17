import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    page: {
        display: 'flex', 
        padding:1,
        backgroundColor: "#fff",
        height:1000, 
        
    },
    image: {
        borderRadius: 30,
        display: 'flex', 
        width: 330,
        height: 350,
        alignSelf:'center',
        borderColor: '#000'
        
    },
    description: {
        display: 'flex', 
        textAlign:'left',
        padding:10,
        height: 60,
        fontSize: 16,
        color:'#000'

    }

});

export default styles;