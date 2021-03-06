import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native"; 

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default class MainScreen extends Component {
    constructor(props){
        super(props);
        this.state = { 
            email: '',
            password: '',
            access: 'success',
            test: 'success'
        }
    }

    emailCheck = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true){
            alert('유효한 이메일을 입력하세요');
        }
        else{
            alert();
        }
    } 

    goScreen(){
        this.props.navigation.navigate('Home')
    }

    Login_check(){

    }

    Login_handler(props) {
        const { email, password } = this.state;
        fetch(
            'http://192.168.0.108:80/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                email : email,
                pw    : password
            })
            }
        )
        .then(res => { 
            console.log(JSON.stringify(res));
            return res.json()})
        .then(console.log(this.state.email, this.state.password))

        if (this.state.access == this.state.test) {
            this.props.navigation.navigate('Home')
        } else {
            alert('비밀번호가 틀렸습니다.')
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.font_M}>
                    {"어서오세요"}
                </Text>

                <Text style={styles.font_L}>
                    {"ARCHIVE_SNS"}
                </Text>

                <Text style={styles.info}>
                    {"\SNS 소식이 궁금하다면!\n" }
                </Text>
            </View>

            <View style={styles.login_view}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    label='Email'
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    />

                <TextInput
                    style={styles.textInput}
                    placeholder="Passwoard"
                    label='Password'
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry={true}
                    />

                <Text 
                    style={styles.button}
                    onPress={() => this.Login_handler()} >
                        Login
                </Text>

                <Text 
                    style={styles.info}>
                        {"어플이 처음이시라면, 관리자에게 요청하세요! :) \n\n"}
                </Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    login_view: {
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
        margin: 30,
        width: 300,
        height: 50,
        padding: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'dodgerblue',
    },

    textInput:{
        fontSize:0.05*Width,
        width: 300,
        height: 30,
        paddingLeft: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 5
    },

    info: {
        color: 'gray',
    }
});


