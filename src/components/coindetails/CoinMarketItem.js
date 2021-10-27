import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../res/colors';

export function CoinMarketItem({item}){

    return (
        <View style={styles.cointaner}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price_usd}</Text>
        </View>
      
    )

}

const styles = StyleSheet.create({
cointaner:{
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderColor: colors.zircon,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    alignItems: "center",
    width: 110
},
nameText:{
    color:"#ffff",
    fontWeight:"bold"

},
priceText:{
    color:"#fff"
}

})