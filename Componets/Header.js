import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';


export default function Header() {
return (
    <View style={styles.container}>
         <Text style ={styles.headerText}>It is beer time!</Text>
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
        padding: 16,
        marginTop: 50
      },
  });

