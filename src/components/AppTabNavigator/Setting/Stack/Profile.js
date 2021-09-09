import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
import { Width } from '../../../Config/globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: 'white'
    },

    font_bold: {
        fontSize: 0.06*Width,
        fontWeight: 'bold',
        margin: 1
    },

    font_bold_margin_5: {
        fontSize: 0.05*Width,
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
        width: '95%',
        borderWidth:1,
        borderColor: 'darkgrey',
        padding:10,
        marginBottom:10,
        backgroundColor: 'white',
    },

    img:{
        paddingLeft: 40,
        width: 350,
        height: 350,
    },
});

class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userImgView}>
                <Image
                    style={styles.img}
                    source={require('../../../../../assets/defalutUserImg.png')}
                />
                </View>

                <Text style={styles.font_bold}>solarpark7346@gmail.com</Text>
                <Text style={styles.font_content}>박보성 / 영남이공대학교</Text>
                <Text>{'\n'}</Text>

                <View style={styles.contentView}>
                    <Text style={styles.font_bold_margin_5}>계정</Text>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ProfilePage')}>
                        <Text style={styles.button_font}>
                            {"비밀번호 변경"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ProfilePage')}>
                        <Text style={styles.button_font}>
                            {"이메일 변경"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contentView}>
                    <Text style={styles.font_bold_margin_5}>커뮤니티</Text>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('FriendSettingStack')}>
                        <Text style={styles.button_font}>
                            {"프로필 변경"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default withNavigation(Profile);