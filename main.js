import Exponent from 'exponent';
import React from 'react';
import { View } from 'react-native';

import CardList from './src/components/CardList';

const App = () =>{
  return (
    // This is the parent container of the App
    <View style={{ flex: 1}}>
      <CardList />
    </View>
  );
}

Exponent.registerRootComponent(App);
