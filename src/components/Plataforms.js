import React from 'react';
import { Platform, Alert, ToastAndroid, Text } from 'react-native';

export default Plataforms = () => {
    
    let plataform = Platform.OS;
    if( plataform == 'android' ) {
        ToastAndroid.showWithGravity(
            `Congrats ! This application run in ${ plataform }`,
            ToastAndroid.CENTER,
            ToastAndroid.SHORT
        );
        return (<Text></Text>);
    } else {
         Alert.alert('Plataform not mach');
         return (<Text></Text>);
    }

}
