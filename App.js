
import React from 'react';
import {NavigationContainer}  from '@react-navigation/native'
import CoinStack from './src/components/CoinStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import colors from './src/res/colors';

const App = () => {
const Tabs = createBottomTabNavigator();
  return (
   <NavigationContainer>
       <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#ffff",
          tabBarInactiveTintColor: "orange",
          tabBarLabelStyle:{
            fontSize: 13,
            marginBottom:2
          },
          tabBarStyle: {
           backgroundColor: colors.blackPearl
          },

        })}
      >
       <Tabs.Screen  
        name="coins"
       component={CoinStack}
       options={{
         tabBarIcon:({size, color})=>(
           <Image style={{tintColor:color ,width:size, height:size}} 
           source={require('../CryptoApp/src/assets/bank.png')} />
         ),
       
       }}
/>
     </Tabs.Navigator>
  
   </NavigationContainer>

  );
};





export default App;