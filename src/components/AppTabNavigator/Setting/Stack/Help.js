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

class Help extends Component {

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.font_M}>
                    <Text style={{color: 'dodgerblue', fontWeight: 'bold'}}
                    >Social Group App Link</Text>
                </Text>
            </View>
        );
    }
}

export default Help;