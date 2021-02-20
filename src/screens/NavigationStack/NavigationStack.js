import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

// import analytics from '@react-native-firebase/analytics';

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
 * @name NavigationStack
 * @description React Native application entry point
 */
const NavigationStack = () => {
    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();

    /**
     * @memberof NavigationStack
     * @name onStateChange
     * @description Method used to handle navigation screen changes. It log the screen event to the analytics
     * @param {object} state
     */
    const onStateChange = async (state) => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        // if (previousRouteName !== currentRouteName) {
        //     await analytics().logScreenView({
        //         screen_name: currentRouteName,
        //         screen_class: currentRouteName,
        //     });
        // }
    };

    return (
        <NavigationContainer
            ref={navigationRef}
            onStateChange={async (state) => await onStateChange(state)}>
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
        </NavigationContainer>
    );
};

export default NavigationStack;
