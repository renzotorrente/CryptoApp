import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import colors from '../res/colors';
import CoinDetailScreen from './CoindetailScreen';
const Stack = createStackNavigator();

const CoinStack = ()=>{

    return (
     <Stack.Navigator
     screenOptions={{
         headerStyle:{
         backgroundColor:colors.blackPearl
         },
         headerTintColor:colors.white
     }}>

     <Stack.Screen name="coins" component={CoinsScreen} />
     <Stack.Screen name="coins details" component={CoinDetailScreen}/>
     </Stack.Navigator>   
    )
}
export default CoinStack;