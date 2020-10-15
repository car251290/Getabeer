import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';


export default function Header() {
return (
    <View style={styles.container}>
      <Image size={50} source={require('./Images/typesofbeers.jpg')}  style={styles.backgroundimage}/>

         <Text style ={styles.headerText}>It is beer time!</Text>

         <Image size={24} source={require('./Images/beer-vector.jpg')}  style={styles.backgroundiconbeer}/>
        <Image size={24} source={require('./Images/home.jpg')}  style={styles.backgroundIcon}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
   
    backgroundIcon:{
        alignItems: 'center',
        top:5,
        width:250,
        height:220,
        marginBottom:20,
        borderColor:'blue',
      },
      headerText: {
        fontSize: 30,
        fontWeight: "bold",
        alignItems: 'center',
        top:.75,
        padding: 50,
        marginTop: 20
      },
      backgroundiconbeer: {
        alignItems: 'center',
        top:5,
        width:100,
        height:120,
        marginBottom:25,
        borderColor:'#3f51b5',
      },
      backgroundimage:{
        flex: 2,
        alignItems: 'center',
        width:300,
        height:500,
      },
  });

