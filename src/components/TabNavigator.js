import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './AppTabNavigator/Home/home'
import SettingScreen from './AppTabNavigator/Setting/presenter';
import MemberList from './AppTabNavigator/MemberList/memberList'

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: { 
            screen: HomeScreen,
            navigationOptions: {
                tabBarOptions: { showLabel: false },
                tabBarLabel: '홈',
                }
            },
                
        MemberList: { 
            screen: MemberList,
            navigationOptions: {
                tabBarOptions: { showLabel: false },
                tabBarLabel: '친구',
                }
            },
        Setting: { 
            screen: SettingScreen,
            navigationOptions: {
                tabBarOptions: { showLabel: false },
                tabBarLabel: '설정',
                }
            },  
    },

    {   
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                
                let iconName;
                
                if (routeName === 'Home') {
                    iconName = 'home-outline';
                }else if (routeName === 'MemberList') {
                    iconName = 'people-outline';
                }else if (routeName === 'Setting') {
                    iconName = "settings-outline"
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={horizontal ? 25 : 25}
                        color={tintColor}
                    />
                )
            }
        })
    }
)

export default createAppContainer(AppTabNavigator );