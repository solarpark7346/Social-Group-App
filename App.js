import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// AppTabNavigator
import MainScreen from './src/screens/MainScreen';
import NavScreen from './src/components/TabNavigator';

// AppTabStack
import notice from './src/components/AppTabNavigator/Home/Stack/notice';

import userInfo from './src/components/AppTabNavigator/MemberList/Stack/userinfo';

import appInfo from './src/components/AppTabNavigator/Setting/Stack/AppInfo';
import Help from './src/components/AppTabNavigator/Setting/Stack/Help';
import FriendSetting from './src/components/AppTabNavigator/Setting/Stack/FriendSetting';

import Post_list from './src/components/AppTabNavigator/Post/Stack/post_list';
import Post from './src/components/AppTabNavigator/Post/Stack/post';
import Post_details from './src/components/AppTabNavigator/Post/Stack/post_details';

import Profile from './src/components/AppTabNavigator/Setting/Stack/Profile';

const AppStackNavigator = createStackNavigator(
    {
        // Navigatior router
        Main: { 
            screen: MainScreen, 
            navigationOptions: {
            headerShown: false }
        },

        Home: { 
            screen: NavScreen ,
            navigationOptions:{
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: 'black'
                },
                headerLeft: 
                <Ionicons 
                    onPress={() => alert('준비중입니다.')} 
                    color='black' 
                    size={20} 
                    name='search' 
                    style={{ paddingLeft:15 }}
                    />,
                title: 'ARCHIVE_SNS',
                headerTitleAlign: 'center',  
                headerRight: 
                <Ionicons 
                    onPress={() => alert('준비중입니다.')}
                    color='white' 
                    size={20} 
                    name='search' 
                    style={{ paddingRight:15 }}
                    />,
            }}, 
        // End Navigatior router

        // Home Stack
        NoticePage: { 
            screen: notice,
            navigationOptions:{
                title: '공지사항'
            } 
        },
        // End Home Stack

        UserInfoPage: { 
            screen: userInfo,
            navigationOptions:{
                title: '유저 정보'
            }// User solo Profile 
        },

        // Setting Stack
        ProfilePage: { 
            screen: Profile,
            navigationOptions:{
                title: '개인/보안'
            } 
        },

        FriendSettingStack: { 
            screen: FriendSetting,
            navigationOptions:{
                title: '친구 DB 설정'
            } 
        },
        
        // Post Stack
        PostList: { 
            screen: Post_list,
            navigationOptions:{
                title: '자유게시판'
            } 
        },

        Post_write: { 
            screen: Post,
            navigationOptions:{
                title: '글쓰기'
            } 
        },

        Postdetails: { 
            screen: Post_details,
            navigationOptions:{
                title: '글쓰기'
            } 
        },


        HelpPage: { 
            screen: Help,
            navigationOptions:{
                title: '고객센터/도움말'
            } 
        },

        AppInfoPage: { 
            screen: appInfo,
            navigationOptions:{
                title: '버전 정보'
            } 
        }, 
        // End Setting Stack
    },
    
    { initialRouteName: "Main", },
    
);

const App = createAppContainer(AppStackNavigator);

export default App;