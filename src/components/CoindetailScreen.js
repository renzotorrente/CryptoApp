import React from 'react';
import { Component } from 'react';
import { View, Text, Image, StyleSheet, SectionList } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Http from '../libs/http';
import colors from '../res/colors';
import { CoinDetail, CoinMarketItem } from './coindetails/CoinMarketItem';

class CoinDetailScreen extends Component{

state = {
 coin:{},
 markets:[]
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
    let {coin, markets} = this.state
    return (
     <View style={styles.container}>
     <View style={styles.subheader}>
    <Image style={styles.imageremote} source={{uri: this.getSymbolIcon(coin.name) }}></Image>
    <Text style={styles.titleText}>{coin.name}</Text>
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
 subheader:{
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 16,
    flexDirection: 'row'
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
  

})
export default CoinDetailScreen;