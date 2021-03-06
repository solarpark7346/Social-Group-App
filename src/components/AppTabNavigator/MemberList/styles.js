import  { StyleSheet, Dimensions} from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const style= StyleSheet.create({
    root:{flex:1, padding:5, backgroundColor: 'white'},
    
    titleText:{
        fontSize:0.05*Width,
        fontWeight:'bold',
        textAlign:'center',
        flex: 0,
        paddingTop:30,
        paddingBottom:16,
    },

    userinfoView:{
        flex:1,
        flexDirection:'column',
    },

    contentView:{
        flexDirection:'row',
        alignItems: 'center',
        width: '100%',
        borderWidth:1,
        borderColor: 'darkgrey',
        padding:10,
        marginBottom:10,
        backgroundColor: 'white',
    },
    
    img:{
        flex:1,
        width: 50,
        height: 100,
    },
    
    UserName:{
        fontSize:0.05*Width,
        fontWeight:'bold',
    },
    
    contentText:{
        fontSize:0.04*Width,
        color: 'darkgrey',
        padding: 1
    },
    
    Loading: {
        fontSize:0.05*Width,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 300
    },
    
});

export default style;