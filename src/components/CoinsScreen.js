import React from 'react';
import { Component } from 'react';
import { View, Text, Pressable,StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import  Http  from '../libs/http';
import CoinsItem from './CoinsItem';
import colors from '../res/colors';
import CoinSearch from './coindetails/CoinSearch';

class CoinsScreen extends Component{
  state = {
    coins:[],
    allcoins:[],
    loading:false

  };
componentDidMount = async()=>{
this.setState({loading:true});
let res = await  Http.instance.get("https://api.coinlore.net/api/tickers/");
this.setState({coins:res.data, allcoins:res.data, loading:false});
}
handlePress=(coin)=>{
this.props.navigation.navigate("coins details", {coin});
}

handleSearch(query){
let allcoins = this.state;
console.log(allcoins);
  const coinsFiltered = allcoins.filter((coin) => {
  return coin.name.toLowerCase().includes(query.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(query.toLowerCase());
});

this.setState({ coins: coinsFiltered });
}
render(){
 
  const {coins, loading} = this.state;
    return (
     <View style={styles.container}>
      <CoinSearch onChange={this.handleSearch} />
      {loading ? 
      <ActivityIndicator size="large" style={styles.loader} color="#ffff"/>
       : null     
      } 
     <FlatList 
     data={coins}
     renderItem={({item})=> 
    <CoinsItem item={item} onpress={()=>this.handlePress(item)}/>
    }
     />
     </View>
    )
}
};
const styles = StyleSheet.create({
    container: {
     
      flex:1,
      backgroundColor:colors.charade,
      alignContent:"center"
    },
     button: {
      color: 'white',
      backgroundColor:"blue",
      fontWeight: 'bold',
      alignItems:"center"
    },
    text:{
        color:"white"},
      loader:{
    
      }
  });


export default CoinsScreen;