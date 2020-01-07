import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton'

export default class HomeScreen extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
      <Text style={styles.text}>Home</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#173848',
  },
  text:{
    fontSize:40,
    color:'#FF2B00',
  }
});
