import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Default from '../../style/Default.js';

export default class Event extends Component {

    state = {
        text: ''
    }

    constructor(props) {
        super(props);
    }

    updateText = (text) => {
        return this.setState({ text });
    }

    render() {
        return (
            <View>
                <Text style={ Default.font40 }>{ this.state.text }</Text>
                <TextInput 
                placeholder='Text something here...'
                value={ this.state.text }
                style={ Default.input }
                onChangeText={ this.updateText }
                />
            </View>
        )
    }
}