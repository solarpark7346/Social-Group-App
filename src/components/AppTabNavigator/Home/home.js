import React, { Component, useState  } from 'react';
import * as DocumentPicker from "expo-document-picker";
import { View, Text, Image, StatusBar, ScrollView } from "react-native";
import styles from "./styles";

const HomeScreen = () => {    
    const [singleFile, setSingleFile] = useState(null);

    const uploadFile = async () => {
        if (singleFile != null) {
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);

            let res = await fetch(
                'http://192.168.0.108:80/usergetpost.php',
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
        <ScrollView>
            <View style={styles.container}> 
                        <Text
                            style={styles.notice}
                            >{"공지사항: 버전 1.0 출시!"}
                        </Text>
                    <Image
                        style={{
                            width: '100%',
                            height: 250,}}
                        source={
                            require('../../../../assets/banner.jpg')}/>

                        <Text style={styles.title}>Wellcome to Social Group App</Text>

                    <View style={styles.content_1}> 
                        <Text
                            style={styles.btns}
                            onPress={uploadFile}
                            >{"Upload"}
                        </Text>

                        <Text
                            style={styles.btns}
                            onPress={pickDocument}
                            >{"Document"}
                        </Text>
                    
                        <Text
                            style={styles.btns}
                            onPress={uploadFile}
                            >{"소개"}
                        </Text>

                        <Text
                            style={styles.btns}
                            onPress={pickDocument}
                            >{"임원 소식"}
                        </Text>
                    </View>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;