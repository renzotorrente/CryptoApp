
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import  FavoritesScreen  from './favoritesScreen';
import colors from '../../res/colors';
 function favoritesStack(){
const Stack = createStackNavigator();

return (
    <Stack.Navigator  screenOptions={{
        headerStyle:{
        backgroundColor:colors.blackPearl
        },
        headerTintColor:colors.white
    }}>
   <Stack.Screen name="favorites" component={FavoritesScreen}/>
  
    </Stack.Navigator>
)

}
export default favoritesStack;