import { red } from '@material-ui/core/colors';
import React from 'react';
import { StyleSheet, Text, View, Button,Dimensions  } from 'react-native';
//import { Button } from 'react-native-paper';

const BUTTON = (props) => {

  return (
    <View style={ style.button }>
       
       <Button title = 'Less get a Beer'

onPress={() => {
  WebBrowser.openBrowserAsync('https://www.google.com/maps/@49.2125932,-123.0931223,14z');
}} 
/>  
    </View>
  )
};

const style = StyleSheet.create({
  button: {
    flex:.2,
    marginTop:40,
    alignItems: 'center',
    width: 150,
    height: 10,
    borderRadius:7,
    color:'#ab003c',fontSize:40,
    backgroundColor: '#a9a9a9',
  }, 
});

  export default BUTTON;