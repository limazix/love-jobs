import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import PrivateNavigationStack from '../PrivateNavigationStack';
// import analytics from '@react-native-firebase/analytics';

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
            <PrivateNavigationStack />
        </NavigationContainer>
    );
};

export default NavigationStack;
