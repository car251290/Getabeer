import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';


export default function Header() {
return (
    <View style={styles.container}>
      <Image size={40} source={require('./Images/typesofbeers.jpg')}  style={styles.backgroundimage}/>

         <Text style ={styles.headerText}>It is beer time!</Text>

         <Image size={24} source={require('./Images/beer-vector.jpg')}  style={styles.backgroundiconbeer}/>
        <Image size={24} source={require('./Images/home.jpg')}  style={styles.backgroundIcon}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
   
    backgroundIcon:{
        alignItems: 'center',
        top:50,
        width:250,
        height:240,
        marginBottom:20,
        borderColor:'blue',
      },
      headerText: {
        fontSize: 30,
        fontWeight: "bold",
        alignItems: 'center',
        padding: 20,
        marginTop: 50
      },
      backgroundiconbeer: {
        alignItems: 'center',
        top:20,
        width:100,
        height:120,
        marginBottom:25,
        borderColor:'#3f51b5',
      },
      backgroundimage:{
        flex: 2,
        alignItems: 'center',
        width:400,
        height:630,
      },
  });

