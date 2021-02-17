import React from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const FBLoginBtn = () => {
    return (
        <View>
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: " + error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    console.log(data.accessToken.toString())
                                }
                            )
                        }
                    }
                }
                onLogoutFinished={() => console.log("logout.")} />
        </View>
    );
};

export default FBLoginBtn;
