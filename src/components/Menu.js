import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { View, StyleSheet } from 'react-native';

import React from 'react';
import {Text} from 'react-native';
import Simple  from './Simple.js'
import EvenOdd from './EvenOdd.js';
import { Invert, MegaSena } from './Multi.js';

const Menu = createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numbers={6} />,
        navigationOptions: {
            title: 'Mega Sena'
        }
    },
    Invert: {
        screen: () => <Invert name="React Native !"/>,
        navigationOptions: {
            title: 'Invert'
        }
    },
    EvenOdd: {
        screen: () => <EvenOdd number={5}/>,
        navigationOptions: {
            titles: 'Even & Odd'
        }
    },
    Simple: {
        screen: () => <Text> Oi </Text>,
        navigationOptions: {
            title: 'Simple'
        }
    }, 
}, { drawerWidth: 300});

export default createAppContainer(Menu);