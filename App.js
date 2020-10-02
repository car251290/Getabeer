
//import { Header} from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BUTTON from './Componets/BUTTON';
import Header from './Componets/Header';
import { Searchbar} from 'react-native-paper';
export default function App() {
  return (
    <View style={styles.container}>
       <Searchbar/>
      
      <Header/>

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
