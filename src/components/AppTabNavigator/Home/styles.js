import  { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        

    },

    notice : {
        alignItems: 'flex-start',
        margin:10
    },

    title: {
        margin: 20,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    content_1: {
        justifyContent:'center',
        textAlign: 'center',
        alignItems: 'center'
    },

    btns:{
        justifyContent:'center',
        textAlign: 'center',
        marginBottom: 10,
        height: 50,
        width: '80%',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'dodgerblue',
    },
});

export default styles;