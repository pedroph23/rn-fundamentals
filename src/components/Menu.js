import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { View, StyleSheet } from 'react-native';

import React from 'react';
import {Text} from 'react-native';
import Simple  from './Simple.js'
import EvenOdd from './EvenOdd.js';
import Counter from './Counter.js';
import Plataforms from './Plataforms.js';
import ValidProps from './ValidProps.js';
import Event from './Event.js';

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
        screen: () => <Text> Simple Component </Text>,
        navigationOptions: {
            title: 'Simple'
        }
    }, 
    Counter: {
      screen: () => <Counter number={0} />,
      navigationOptions: {
          title: 'Counter'
      }
  },
    Plataforms:{
        screen: Plataforms,
        navigationOptions: {
        title: 'Check Plataform'
        }
    },
    ValidProps: {
        screen: () => <ValidProps ano={"20"} />,
        navigationOptions: {
            title: 'Validate Props'
        }
    },
    Event: {
        screen: Event
    }
}, { drawerWidth: 300});

export default createAppContainer(Menu);