import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import SocialBar from './SocialBar';

class Card extends React.Component {
  render() {

    return (
      // This is the parent container of the App
      <View style={styles.cardStyle}>
        <Image source={this.props.thumbnail} style={styles.imageStyle} />
        <SocialBar />
        <Text>{this.props.name},{this.props.age}</Text>
        <Text>I am the best marketing expert ever!</Text>
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
    margin: 20,

  },
  imageStyle: {
    width: 350,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
