import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './AppTabNavigator/Home/home'
import PostScreen from './AppTabNavigator/Post/presenter'
import SettingScreen from './AppTabNavigator/Setting/presenter';
import MemberList from './AppTabNavigator/MemberList/memberList'

const AppTabNavigator = createBottomTabNavigator(
    {
        // TabNavigatior router
        Home: { 
            screen: HomeScreen,
            navigationOptions: {
                tabBarOptions: { 
                    showLabel: false,
                    },
                tabBarLabel: '홈',
                }, 
            },
                
        MemberList: { 
            screen: MemberList,
            navigationOptions: {
                tabBarOptions: { 
                    showLabel: false,
                    },
                tabBarLabel: '임원',
                }
            }, 

        Post: { 
            screen: PostScreen,
            navigationOptions: {
                tabBarOptions: { 
                    showLabel: false,
                    },
                tabBarLabel: '글쓰기',
                }
            }, 

        Setting: { 
            screen: SettingScreen,
            navigationOptions: {
                tabBarOptions: { 
                    showLabel: false,
                    // activeTintColor: 'tomato',
                    // inactiveTintColor: 'white',
                    // style: {
                    //     backgroundColor: 'dodgerblue',
                    //     color: 'white'
                    // } 
                },
                tabBarLabel: '설정',
                }
            },  
        // End TabNavigatior router
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
                }else if (routeName === 'Post') {
                    iconName = "newspaper-outline"
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
    },
)

export default createAppContainer(AppTabNavigator );