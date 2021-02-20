import React from 'react';
import { View } from 'react-native';

import auth from '@react-native-firebase/auth';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const onLoginFinished = async (error, result) => {
    if (error) {
        throw 'Login has error: ' + error;
    }

    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        throw 'Something went wrong obtaining access token';
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
    );

    return auth().signInWithCredential(facebookCredential);
};

const onLogoutFinished = async () => {
    return await auth().signOut();
};

const FBLoginBtn = () => {
    return (
        <View>
            <LoginButton
                onLoginFinished={async (error, result) =>
                    await onLoginFinished(error, result)
                }
                onLogoutFinished={async () => await onLogoutFinished()}
            />
        </View>
    );
};

export default FBLoginBtn;
