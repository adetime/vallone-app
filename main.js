import Exponent from 'exponent';
import React from 'react';
import { View } from 'react-native';

import Card from './src/components/Card';

const App = () =>{
  return (
    // This is the parent container of the App
    <View style={{ flex: 1}}>
      <Card />
    </View>
  );
}

Exponent.registerRootComponent(App);
