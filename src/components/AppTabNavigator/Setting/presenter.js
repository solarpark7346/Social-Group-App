import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
    },

    font_M:{
        fontSize:30,
        margin: 5
    },
});

class SettingScreen extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('appInfo')}>
                    <Text style={styles.font_M}>
                        <Ionicons  
                            size='35' 
                            name='person-circle-outline' 
                            style={{ paddingRight:15 }}/>
                        {"개인/보안"}
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('appInfo')}>
                    <Text style={styles.font_M}>
                        <Ionicons 
                            size='35' 
                            name='people-circle-outline' 
                            style={{ paddingRight:15 }}/>
                        {"친구"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('appInfo')}>
                    <Text style={styles.font_M}>
                        <Ionicons 
                            size='35' 
                            name='ellipsis-horizontal-circle-outline' 
                            style={{ paddingRight:15 }}/>
                        {"기타"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HelpPage')}>
                    <Text style={styles.font_M}>
                        <Ionicons 
                            size='35' 
                            name='happy-outline' 
                            style={{ paddingRight:15 }}/>
                        {"고객센터/도움말"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AppInfoPage')}>
                    <Text style={styles.font_M}>
                        <Ionicons  
                            size='35' 
                            name='information-circle-outline' 
                            style={{ paddingRight:15 }}/>
                        {"버전정보"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

export default SettingScreen;
