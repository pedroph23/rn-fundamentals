/**
 * Utilizate model component. Child, Father, Granfather
 */

 import { Text } from 'react-native';

export const Child = () => {

    return( 
        <Text>
            Filho
        </Text>
    );

}

export const Father = () => {
    return( 
        <Text>
            <Child />
        </Text>
    );
}

export const Granpa =  () => {
    return (
        <View>
            <Father />
        </View>    
    );
}