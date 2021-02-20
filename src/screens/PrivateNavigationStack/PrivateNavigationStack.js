import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';

/**
 * @memberof screens
 * @name Tab
 * @description React Navigation Tab view component
 */
const Tab = createBottomTabNavigator();

/**
 * @memberof screens
 * @name PrivateNavigationStack
 * @description React Native application entry point
 */
const PrivateNavigationStack = () => {
    return (
        <Tab.Navigator initialRouteName="home" data-testid="tabs">
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarTestID: 'tab-home',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesomeIcon
                            icon={faHome}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarTestID: 'tab-profile',
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesomeIcon
                            icon={faUser}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default PrivateNavigationStack;
