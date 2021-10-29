import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function FavoritesEmptyState(){

   return (
       <View style={styles.container}>
      <Text style={styles.texto}>You dont have any favorites yet</Text>
       </View>
   ) 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center"
    },
    texto:{
        color:"#ffff",
        fontWeight:"bold",
        fontSize:18,
        alignSelf:"center"
    }
})
export default FavoritesEmptyState;