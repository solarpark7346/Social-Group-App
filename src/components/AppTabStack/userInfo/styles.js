import  { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    img:{
        width: 350,
        height: 350,
    },

    userImgView:{
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor: 'white'
    },
    
    userInfoView: {
        flex:2,
        padding: 10
        },
    
    UserName:{
        fontSize:30,
        fontWeight:'bold',
    },
    
    contentText:{
        fontSize:20,
        margin:10
    },
});

export default styles;