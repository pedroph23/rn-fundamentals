import React from 'react';
import { View, Text } from 'react-native';
import Default from '../../style/Default.js';

export const Invert = props => {
    return (
    <View>
        <Text style={[Default.ex]}> {props.name.split('').reverse().join('')}</Text>
    </View>
    );
}

export const MegaSena = props => {
    debugger
    const [min, max]=[1, 60];
    const numbers = Array(props.numbers || 6).fill(0);

    for (let i = 0; i < numbers.length; i++) {
        let novo = 0;
        while (numbers.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }

        numbers[i] = novo;
    }
    numbers.sort((a, b ) => a-b);
    return ( 
        <Text style={Default.ex}>{numbers.join(', ')}</Text>
    );
}

