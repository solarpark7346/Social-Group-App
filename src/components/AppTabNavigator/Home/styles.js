import  { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        height: '100%'
    },

    notice : {
        alignItems: 'flex-start',
        flexDirection: 'row',
        margin:5
    },

    title: {
        margin: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    content: {
        justifyContent:'center',
        textAlign: 'center',
        alignItems: 'center'
    },

    font_text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },

    btns:{
        justifyContent:'center',
        textAlign: 'center',
        marginBottom: 10,
        height: 50,
        width: '80%',
        fontWeight: 'bold',
    },
});

export default styles;