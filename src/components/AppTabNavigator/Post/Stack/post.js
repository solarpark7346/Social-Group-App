import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native"; 

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class Post extends Component {
    constructor(props){
        super(props);
        this.state = { 
            title: '',
            content: '',
            w_user: '',
            access: 'success',
            test: 'success'
        }
    }

    __Post_handler__(props) {
        const { title, content, w_user } = this.state;
        fetch(
            'http://192.168.0.5/App/User_News/service/_userNews_post_.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                },
            body: JSON.stringify({
                w_user  : w_user,
                title   : title,
                content : content
                })
            }
        )
        .then(res => { 
            console.log(JSON.stringify(res));
            return res})
        .then(console.log(this.state.title, this.state.content))
    }

    render() {
        return (
        <View style={styles.container}>
            <ScrollView>
                <TextInput
                    style={styles.textInput}
                    placeholder="제목"
                    label='title'
                    value={this.state.title}
                    onChangeText={(title) => this.setState({ title })}
                    />

                <TextInput
                    style={styles.text_Input_Content}
                    placeholder="내용을 입력하세요."
                    label='content'
                    value={this.state.content}
                    onChangeText={(content) => this.setState({ content })}
                    />

                <TouchableOpacity
                    onPress={() => this.__Post_handler__()}>
                <Text style={styles.button}>완료</Text>
                </TouchableOpacity>
                <Text 
                    style={styles.info}>
                        {`
태원동창회는 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해
커뮤니티 이용규칙을 제정하여 운영하고 있습니다.
위반시 게시물이 삭제되고 서비스 이용이 제한될 수 있습니다.

※ 정치 사회 관련 행위 금지
-국가기관, 정치 관련 단체, 언론, 시민단체에 대한 언급 혹은 이와 관련한 행위
-정책 외교 또는 정치 정파에 대한 의견, 주장 및 이념, 가치관을 드러내는 행위
-성별, 종교, 인종, 출신, 지역, 직업, 이념 등 사회적 이슈에 대한 언급 혹은 이와 관련한 행위
-위와 같은 내용으로 유추될 수 있는 비유, 은어 사용 행위

※홍보 및 판매 관련 행위 금지
-영리 여부와 관계 없이 사업체, 기관, 단체, 개인에게 직간접적으로 영향을 줄 수 있는 게시물 작성 행위
-위와 관련된 것으로 의심되거나 예상될 수 있는 바이럴 홍보 및 명칭 단어 언급 행위

※그 밖의 규칙 위반
-타인의 권리를 침해하거나 불쾌감을 주는 행위
-범죄, 불법 행위 등 법령을 위반하는 행위
-욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용을 포함한 게시물 작성 행위
-음란물, 성적 수치심을 유발하는 행위
-스포일러, 공포, 속임, 놀라게 하는 행위
                        `}
                </Text>
            </ScrollView>
        </View>
        )
    }
}

export default Post;

const styles = StyleSheet.create({
    container: {
        top: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title_view: {
        width: window.width,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },  

    font_L:{
        fontSize:0.05*Width,
        fontWeight:'bold',
        shadowColor: 'rgba(0,0,0,0.2)'
    },

    font_M:{
        fontSize:0.03*Width,
    },

    button: {
        width: '100%',
        height: 50,
        padding: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'dodgerblue',
    },

    textInput:{
        fontSize:0.05*Width,
        width: '100%',
        height: 30,
        paddingLeft: 10,
        borderStyle: 'solid',
        borderColor: 'darkgrey',
        borderBottomWidth: 1,
        margin: 5
    },

    text_Input_Content: {
        fontSize:0.05*Width,
        width: '100%',
        height: 300,
        paddingLeft: 10,
        borderStyle: 'solid',
    },

    info: {
        color: 'gray',
        padding: 20
    }
});


