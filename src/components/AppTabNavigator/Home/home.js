import React, { Component  } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

class HomeScreen extends Component{
    render(){
    return (
        <ScrollView style={styles.container}>
            <View>                      
                <Image
                    style={{
                        width: '100%',
                        height: 250,}}
                    source={
                        require('../../../../assets/banner.jpg')}/>

                    <Text style={styles.title}></Text>

                <View style={styles.content}>
                    <TouchableOpacity
                        onPress={()=>  this.props.navigation.navigate('NoticePage')}
                        style={styles.btns}>
                        <Text style={styles.font_text}>
                        {"공지사항"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
}

export default HomeScreen;