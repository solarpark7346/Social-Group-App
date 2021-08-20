import  { StyleSheet } from "react-native";

const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        flex: 0,
        paddingTop:30,
        paddingBottom:16,
    },

    userinfoView:{
        flex:1,
        flexDirection:'column'
    },

    contentView:{
        flexDirection:'row',
        alignItems: 'center',
        width: '100%',
        borderWidth:1,
        borderRadius:9,
        padding:10,
        marginBottom:10,
        backgroundColor: 'white'
    },
    
    img:{
        flex:1,
        width: 50,
        height: 100,
    },
    
    UserName:{
        fontSize:24,
        fontWeight:'bold',
    },
    
    contentText:{
        fontSize:16,
    },
    
    Loading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 300
    },
    
});

export default style;