import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import auth from '../../features/auth';

/**
 * @memberof Screens
 * @name LoginScreen
 * @description It implements the Login Screen page
 */
const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.view}>
            <auth.FBLoginBtn />
        </SafeAreaView>
    );
};

/**
 * @name styles
 * @description it implements the home screen page' style grouped by component view
 */
const styles = StyleSheet.create({
    view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default LoginScreen;
