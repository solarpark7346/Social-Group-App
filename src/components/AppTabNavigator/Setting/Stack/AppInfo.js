import React, {Component} from 'react';
import { StyleSheet, Image, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        top: -40,
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },

    font_M:{
        textAlign: 'center',
        fontSize:20,
        margin: 5
    },
});

class AppInfo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{
                    width: '100%',
                    height: '50%',
                    }}
                    source={require('../../../../../assets/icon.png')}
                />

                <Text style={styles.font_M}>
                    {"버전: 20210819"}
                </Text>
            </View>
        );
    }
}

export default AppInfo;