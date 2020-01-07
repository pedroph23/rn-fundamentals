
import React,{ Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Counter extends Component {

    constructor(props) {
        super(props);
    }
    
    state = {
        number: this.props.number
    }
    
    oneMore = () =>{
        this.setState({
            number: this.state.number + 1
        });
    }

    clear = () => {
        this.setState({
            number: 0
        })
    }

    render() {
        return (   
            <View>
                <Text style={{fontSize: 40}}>{this.state.number}</Text>
                <TouchableHighlight 
                    onPress={this.oneMore}
                    onLongPress={this.clear}
                >
                    <Text>Increment/Clear</Text>
                </TouchableHighlight>
            </View>
        );
    };
}  