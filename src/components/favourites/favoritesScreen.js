import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import Storage from '../../libs/storage'
import colors from '../../res/colors'
import CoinsItem from '../CoinsItem'
import FavoritesEmptyState from './favoritesEmpty'

 class FavoritesScreen extends Component{
state = {
    favorites : [],
}
getFavorites = async ()=>{
    try{
  const allKeys = await Storage.instance.getAllkeys();
  const favs = await Storage.instance.multiGet(allKeys);
  const favoritesparse = favs.map((elem)=> JSON.parse(elem[1]) );
  this.setState({favorites:favoritesparse});
    }catch(err){
   console.log('error: ', err);
    }
}
componentDidMount(){
    this.getFavorites();
    this.props.navigation.addListener("focus", this.getFavorites);
}
componentWillUnmount(){
    this.props.navigation.removeListener("focus", this.getFavorites);
}
handlepress = (coin)=>{
this.props.navigation.navigate("coins details", coin)

}

    render(){
        const {favorites} = this.state;
        return (
            <View style={styles.container}>
                {favorites.length == 0? <FavoritesEmptyState/> : 
                 null
                }
                {favorites.length > 0 ?
                <FlatList   
                data={favorites} 
                renderItem={({item})=>  
                <CoinsItem item={item} onPress={()=> this.handlepress(item)} />
                }/>:null}
            

            
               
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