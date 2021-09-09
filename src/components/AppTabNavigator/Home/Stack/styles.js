import  { StyleSheet, Dimensions} from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const style= StyleSheet.create({
    root:{flex:1, padding:5,},

    noticeView:{
        flex:1,
        flexDirection:'column'
    },

    contentView:{
        flexDirection:'row',
        alignItems: 'center',
        width: '100%',
        borderWidth:1,
        padding:10,
        marginBottom:10,
        backgroundColor: 'white'
    },
        
    titleText:{
        fontSize:0.07*Width,
        fontWeight:'bold',
    },
    
    contentText:{
        fontSize:0.05*Width,
        margin: 5
    },

    regText:{
        fontSize:0.04*Width,
        color: 'darkgrey',
        position: 'absolute', 
        right: 0,
    },
    
    Loading: {
        fontSize:0.05*Width,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 300
    },

    commit_View: {
        flex:1,
        flexDirection:'row',
        position: 'absolute', 
        right: 0,
    },
});

export default style;