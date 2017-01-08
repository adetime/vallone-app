import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';

class Card extends React.Component {
  render() {

    const imageSource = require('./../../assets/puppy_03.jpg');
    return (
      // This is the parent container of the App
      <View style={{ flex: 1}}>

        <Header />

        <View style={styles.cardStyle}>
          <Image source={imageSource} style={styles.imageStyle} />
          <Text>Alexandra, 24</Text>
          <Text>I am the best marketing expert!</Text>
        </View>

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

export default Card;
