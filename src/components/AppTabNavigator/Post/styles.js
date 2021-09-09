import  { StyleSheet} from "react-native";
import { Width } from '../../Config/globalStyles';

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },

    font_bold: {
        fontSize:0.06*Width,
        fontWeight: 'bold',
        margin: 1
    },

    font_bold_margin_5: {
        fontSize:0.05*Width,
        fontWeight: 'bold',
        margin: 5
    },

    font_content: {
        fontSize: 0.04*Width,
        color: 'darkgrey',
        margin: 1
    },

    button_font: {
        fontSize: 0.05*Width,
        margin: 5
    },

    contentView:{
        flexDirection:'column',
        width: '100%',
        borderWidth:1,
        borderColor: 'darkgrey',
        padding:10,
        marginBottom:10,
        backgroundColor: 'white',
    },
});

export default styles;