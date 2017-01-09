import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import Card from './Card';

class CardList extends React.Component {
  render() {

    const imageSource1 = require('./../../assets/puppy_01.jpg');
    const imageSource2 = require('./../../assets/puppy_02.jpg');
    const imageSource3 = require('./../../assets/puppy_03.jpg');

    return (
      // This is the parent container of the App
      <View style={{ flex: 1}}>
        <Header />
        <Card thumbnail={imageSource1} name='John' age='46' />
        <Card thumbnail={imageSource2} name='Maria' age='23' />
        <Card thumbnail={imageSource3} name='Adeildo' age='36' />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    flex: 7,
    backgroundColor: 'blue',
    alignSelf: 'center',
    alignItems: 'center',

  },
  imageStyle: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardList;
