import React from 'react';
import { Component } from 'react';
import { View, Text, Image, StyleSheet, SectionList, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Http from '../libs/http';
import colors from '../res/colors';
import Storage from '../../src/libs/storage';
import { CoinDetail, CoinMarketItem } from './coindetails/CoinMarketItem';

class CoinDetailScreen extends Component{

state = {
 coin:{},
 markets:[],
 isfavorite:false
} 
Togglefavorite(){
if(this.state.isfavorite){

}else{
this.addfavorite();
}

}
async addfavorite (){
  const coin = JSON.stringify(this.state.coin);
  const key = `favorite-${this.state.coin.id}`;
  const stored = await Storage.instance.store(key, coin);
  console.log("stored", stored);
  if(stored){ //si quedó guardado
  this.setState({isfavorite:true});
  }
}
   
async getMarkets  (coinId){
  const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`; 
   let markets = await Http.instance.get(url);
  this.setState({markets})
    
   }     
componentDidMount(){
let coin = this.props.route.params.coin;
this.getMarkets(coin.id)
this.setState({coin});
this.props.navigation.setOptions({title: coin.symbol});

}
getSymbolIcon(symbolStr){
    if (symbolStr) {
        const symbol = symbolStr.toLowerCase().replace(' ', '/');
        return `https://c1.coinlore.com/img/25x25/${symbol}.png`
    }
    }   
 GetSections(coin){

  const data = [
    {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      }, 
]
return data;
 }

render(){
    let {coin, markets, isfavorite} = this.state
    return (
     <View style={styles.container}>
     <View style={styles.subheader}>
    <View style={styles.row}>

    <Image style={styles.imageremote} source={{uri: this.getSymbolIcon(coin.name) }}></Image>
    <Text style={styles.titleText}>{coin.name}</Text>  
    </View> 
    
    <Pressable 
    onPress={this.Togglefavorite}
    style={[
      styles.bottonfav,
      isfavorite ? styles.bottonfavRem : styles.bottonfavAdd
    ]}>
      <Text style={styles.bottonfavText}>{isfavorite ? "Remove currency" : "Add to fav" }</Text>
      </Pressable>
     </View>
     <SectionList 
     style={styles.section}
     sections={this.GetSections(coin)}
     keyExtractor={(item) => item}
     renderItem={({item})=>    
    <View style={styles.sectionItem}>
     <Text style={styles.itemText}>{item}</Text>
   </View>}
     renderSectionHeader={({section}) => (
        <View  style={styles.sectionHeader}>
          <Text style={styles.sectionText} >{section.title}</Text>
        </View>
      )}
     />
     <Text style={styles.marketTitle}>Markets:  </Text>
     <FlatList style={styles.list} horizontal={true} data={markets}
     renderItem={({item})=><CoinMarketItem item={item}/>}
     ></FlatList>
     </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.charade,
        flex:1,   
       },
 imageremote:{
  width:25,
  height:25  
 },
 row:{
   flexDirection:"row"
 },
 subheader:{
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 16,
    flexDirection: 'row',
    justifyContent:"space-between"
 },
 titleText: {
    fontSize: 16,
    color: "#ffff",
    fontWeight:"bold",
    marginLeft:8
  },
sectionHeader: {
  backgroundColor: 'rgba(0,0,0,0.2)',
  padding: 8,
},
list:{
  maxHeight:100,
  paddingLeft:16
},
marketTitle:{
  color:"#fff",
  fontSize:16,
  marginBottom:4,
  marginLeft:16,
  fontWeight:"bold"
},
section:{
maxHeight:220
},
sectionItem: {
  padding: 8,
},
itemText: {
  color: '#fff',
  fontSize: 14,
},
sectionText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',

},
bottonfav:{
  padding:8,
  borderRadius:8,
  
},
bottonfavAdd:{
  backgroundColor:colors.picton,
},
bottonfavText:{
color:colors.white
},
bottonfavRem:{
  backgroundColor:colors.carmine
}
  

})
export default CoinDetailScreen;