import React, {Component} from 'react';
import { Image, View, Text, ScrollView } from "react-native";
import styles from "./styles";

class userInfo extends Component {

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
                            source={require('../../../../assets/defalutUserImg.png')}
                        />
                    </View>
                        <Text style={styles.UserName}>이름: {this.state.item.name}</Text>
                        <Text style={styles.contentText}>생년월일: {this.state.item.bir}</Text>
                        <Text style={styles.contentText}>학번: {this.state.item.stu_num}</Text>
                        <Text style={styles.contentText}>학과: {this.state.item.dep}</Text>
                        <Text style={styles.contentText}>현재소속: {this.state.item.now_gp}</Text>
                        <Text style={styles.contentText}>전화번호: {this.state.item.p_num}</Text>
                        <Text style={styles.contentText}>이메일: {this.state.item.email}</Text>
                        <Text style={styles.contentText}>집주소: {this.state.item.ar}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

userInfo.defaultProps = {
}

export default userInfo;