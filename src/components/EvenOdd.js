import Padrao from '../../style/Default.js';
import React from 'react';
import {View, Text} from 'react-native';

function verifyNumberEvenOdd(number) {
    return number % 2 == 0
            ? <Text style={Padrao.ex}> Par </Text>
            : <Text style={Padrao.ex}>Impar</Text>
}

export default props => {
return <View>
    { verifyNumberEvenOdd(props.number) }
</View>
}