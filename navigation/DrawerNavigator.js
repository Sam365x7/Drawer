import React from 'react';
import {Platform,Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from "../screen/HomeScreen";
import Updates from "../screen/Updates";
import Terms from "../screen/Terms";

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth : WIDTH*0.83,
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home:{
            screen:HomeScreen
        },
        Update:{
            screen:Updates
       },
       Term:{
        screen:Terms
        }
    
},
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);