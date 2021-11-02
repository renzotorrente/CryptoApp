import React from 'react';
import { View, Text ,Pressable, StyleSheet,Image} from 'react-native';
import colors from '../res/colors';

function CoinsItem({item, onPress}){

   const getImageArrow = ()=>{
    if(item.percent_change_1h > 0){
     return require("coinsapp/src/assets/arrow_up.png");
    }else{
    return require("coinsapp/src/assets/arrow_down.png");
    }

   }

    return (
        <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.pricetext}>{`  $ ${item.price_usd}`}</Text>
        </View>
        <View style={styles.row}>
         <Text style={styles.percentText}>{item.percent_change_1h }</Text>    
         <Image style={styles.imageIcon} source={getImageArrow()} ></Image>
        </View>
        
        </Pressable>
    )
}
const styles = StyleSheet.create({
container:{
flexDirection:"row",
justifyContent:"space-between",
padding:16,
borderBottomColor:colors.zircon,
borderBottomWidth:1

},
row:{
    flexDirection:"row"
},
symbolText:{
    color:"#ffff",
    fontWeight:"bold",
    fontSize:16,
    marginRight:8
},
nameText:{
fontSize:14,
color:"#ffff",
marginLeft:4

},
percentText:{
    color:"#ffff",
    fontSize:12,
    marginRight:8,
    marginLeft:4
},
pricetext:{
    color:"#ffff",
    fontSize:14,
    marginRight:10,
    marginLeft:4
},
imageIcon:{
    width:22,
    height:22
}


});
export default CoinsItem;