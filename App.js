
import React from 'react';
import {NavigationContainer}  from '@react-navigation/native'
import CoinStack from './src/components/CoinStack';


const App = () => {

  return (
   <NavigationContainer>
   <CoinStack/>
   </NavigationContainer>

  );
};



export default App;