import * as React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

/**
 * @memberof Screens
 * @name ProfileScreen
 * @description It implemets the Home Screen page
 */
const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.view}>
            <Text>Profile Screen</Text>
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

export default ProfileScreen;
