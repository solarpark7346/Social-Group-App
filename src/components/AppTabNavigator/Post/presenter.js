import React, {Component} from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

class Post extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>

                <Text style={styles.font_bold}>SNS</Text>
                <Text style={styles.font_content}>-임원분들이 어떻게 지내는지 한번 열람하세요!</Text>
                <Text>{'\n'}</Text>

                <View style={styles.contentView}>

                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('PostList')}>
                        <Text style={styles.button_font}>
                            <Ionicons  
                                size={30}
                                color='dodgerblue' 
                                name='document-text-outline' 
                                style={{ paddingRight:15 }}/>
                            {"공지사항"}
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.font_bold_margin_5}>커뮤니티</Text>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('PostList')}>
                        <Text style={styles.button_font}>
                            <Ionicons  
                                size={30}
                                color='dodgerblue' 
                                name='document-text-outline' 
                                style={{ paddingRight:15 }}/>
                            {"자유게시판"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            onPress={() => alert('준비중입니다.')}>
                        <Text style={styles.button_font}>
                        <Ionicons  
                            size={30}
                            color='dodgerblue' 
                            name='document-text-outline' 
                            style={{ paddingRight:15 }}/>
                            {"비밀게시판"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contentView}>
                    <Text style={styles.font_bold_margin_5}>질문과답변</Text>
                    <TouchableOpacity
                            onPress={() => alert('준비중입니다.')}>
                        <Text style={styles.button_font}>
                        <Ionicons  
                            size={30} 
                            color='dodgerblue' 
                            name='document-text-outline' 
                            style={{ paddingRight:15 }}/>
                            {"Q/A"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

export default withNavigation(Post);