import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../res/colors'
import FavoritesEmptyState from './favoritesEmpty'

 class FavoritesScreen extends Component{


    render(){
        return (
            <View style={styles.container}>
                <FavoritesEmptyState/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
container:{
backgroundColor:colors.charade,
flex:1

}

})
export default FavoritesScreen;