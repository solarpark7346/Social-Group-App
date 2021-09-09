import  { StyleSheet, Dimensions} from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
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
        fontSize:0.05*Width,
        fontWeight:'bold',
    },
    
    contentText:{
        fontSize:0.05*Width,
        margin:10
    },
});

export default styles;