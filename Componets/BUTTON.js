import React from 'react';
import { StyleSheet, Text, View, Button,Dimensions  } from 'react-native';

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
      flex:0.2,
      marginTop:60,
      alignItems: 'center',
      fontSize:40,
      backgroundColor: '#03DAC6',
      padding: 1.5,
      width: 150,
      height: 50,
      borderRadius:4,
    }, 
  });

  export default BUTTON;