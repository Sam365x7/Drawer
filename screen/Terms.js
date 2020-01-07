import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton'

export default class Terms extends React.Component {
  render(){
  return (
    
    <View style={styles.container}>
      <MenuButton/>
      <Text style={styles.text}>Terms</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#173848',
    justifyContent: 'center',
  },
  text:{
    fontSize:40,
    color:'#FF2B00',
  }
});
