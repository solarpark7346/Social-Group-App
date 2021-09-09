import React, { Component, useState } from 'react';
import * as DocumentPicker from "expo-document-picker";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        top: -40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white'
    },

    btns:{
        justifyContent:'center',
        textAlign: 'center',
        marginBottom: 10,
        height: 50,
        width: '80%',
        backgroundColor: 'dodgerblue',
    },

    font_text: {
        fontWeight: 'bold',
        color: 'white',
    },

});

const FriendSetting = () => {

    const [singleFile, setSingleFile] = useState(null);

    const uploadFile = async () => {
        if (singleFile != null) {
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);

            let res = await fetch(
                'http://192.168.0.5/App/service/upload.php',
                {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'multipart/form-data;',
                    },
                }
        );
        let responseJson = await res.json();

        if (responseJson.status == 1) {
            alert('Upload Successful');
        }
        } else {
        alert('먼저 파일을 업로드 해주세요!');
        }
    };

    const pickDocument = async () => {
        let res = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true })
        console.log('res : ' + JSON.stringify(res));
        alert('업로드 완료');
        setSingleFile(res);
    }

    return (
        <View style={styles.container}>
            <Text>{"프로필 변경 jpge를 지원합니다.  \n\n"}</Text>
            <TouchableOpacity
                onPress={uploadFile}
                style={styles.btns}>
                <Text style={styles.font_text}>{"Upload"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={pickDocument}
                style={styles.btns}>
                <Text style={styles.font_text}>{"Document"}</Text>
            </TouchableOpacity>
        </View>
    );
    
}

export default FriendSetting;