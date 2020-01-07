import React from 'react';
import PropTypes from 'prop-types';
import { Text, Alert } from 'react-native';


const ValidProps = (props) => {

    return(
        <Text style={{ fontSize: 35 }}> 
            {props.label}
            {props.ano + 2000}
        </Text>
    )
}

ValidProps.defaultProps = {
    label: 'Ano: '
}

ValidProps.propTypes = {
    ano: PropTypes.number.isRequired,
}

export default ValidProps;