import  { StyleSheet } from "react-native";
import {colors, width, height} from '../components/Config/globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    login_view: {
        width: window.width,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },  

    font_L:{
        fontSize: width * 0.05,
        fontWeight:'bold',
        shadowColor: 'rgba(0,0,0,0.2)'
    },

    font_M:{
        fontSize: width * 0.05,
    },

    button: {
        margin: 30,
        width: 300,
        height: 50,
        padding: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'dodgerblue',
    },

    textInput:{
        fontSize: 25,
        width: 300,
        height: 30,
        paddingLeft: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 5
    },

    info: {
        color: 'gray',
    }
});

export default styles;