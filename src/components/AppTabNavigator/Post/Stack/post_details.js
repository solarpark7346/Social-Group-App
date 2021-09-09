import React, {Component} from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize:0.03*Width,
        margin:10
    },
});

class post_details extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            item: this.props.navigation.state.params.item
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.userInfoView}>
                    <View style={styles.userImgView}>
                        <Image
                            style={styles.img}
                            source={require('../../../../../assets/defalutUserImg.png')}
                        />
                    </View>
                        <Text style={styles.contentText}>{this.state.item.w_user}</Text>
                        <Text style={styles.contentText}>{this.state.item.regist_day}</Text>

                        <Text style={styles.contentText}>{this.state.item.title}</Text>
                        <Text style={styles.contentText}>{this.state.item.content}</Text>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default post_details;