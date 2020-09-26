
//import { Header} from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BUTTON from './Componets/BUTTON';
import Header from './Componets/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
       <Text>Get Started ordening a beer</Text>
      <BUTTON/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2B2B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
