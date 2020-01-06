import React from 'react';
import { Text } from 'react-native';
import Padrao from '../../style/Default.js';

export default (props) => {
    return <Text style={[Padrao.ex]} > { props.text } </Text>
}
