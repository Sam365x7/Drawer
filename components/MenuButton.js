import React from 'react';
import {StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class MenuButton extends React.Component{
    render(){
        return(
            
            <Ionicons name="md-menu" color="#000000"
            size={32} style={styles.menuIcon}
         onPress={() => {this.props.navigation.toggleDrawer()}} />
        )
    };
}

const styles = StyleSheet.create({
    menuIcon:{
        zIndex:9,
        position:'absolute',
        top:40,
        right:20,
    }
})

export default withNavigation(MenuButton);