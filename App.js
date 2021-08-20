import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// AppTabNavigator
import MainScreen from './src/screens/MainScreen';
import NavScreen from './src/components/TabNavigator';

// AppTabStack
import userInfo from './src/components/AppTabStack/userInfo/userinfo';
import appInfo from './src/components/AppTabNavigator/Setting/Stack/AppInfo';
import Help from './src/components/AppTabNavigator/Setting/Stack/Help';

const AppStackNavigator = createStackNavigator(
    {
        Main: { 
            screen: MainScreen, 
            navigationOptions: {
            headerShown: false }
        },

        Home: { 
            screen: NavScreen ,
            navigationOptions:{
                headerLeft: <Ionicons size='20' name='search' style={{ paddingLeft:15 }}/>,
                title: 'Social Group App',
                headerTitleAlign: 'center',  
                headerRight: <Ionicons size='20' name='person-circle-outline' style={{ paddingRight:15 }}/>,
            }}, 

        UserInfoPage: { screen: userInfo },

        AppInfoPage: { 
            screen: appInfo,
            navigationOptions:{
                title: '버전 정보'
            } 
        },

        HelpPage: { 
            screen: Help,
            navigationOptions:{
                title: '고객센터/도움말'
            } 
        },
    },
    
    { initialRouteName: "Main" },
    
);

const App = createAppContainer(AppStackNavigator);

export default App;