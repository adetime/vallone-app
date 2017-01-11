import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const SKIP_UNPRESSED = require('./../../assets/skip-unpressed.png');
const SKIP_PRESSED = require('./../../assets/skip-pressed.png');
const ONE_HEART_UNPRESSED = require('./../../assets/one-heart-unpressed.png');
const ONE_HEART_PRESSED = require('./../../assets/one-heart-pressed.png');
const TWO_HEART_UNPRESSED = require('./../../assets/two-heart-unpressed.png');
const TWO_HEART_PRESSED = require('./../../assets/two-heart-pressed.png');
const THREE_HEART_UNPRESSED = require('./../../assets/three-heart-unpressed.png');
const THREE_HEART_PRESSED = require('./../../assets/three-heart-pressed.png');

const SocialBar = (props) => {
  //props.oneHeartPressed = true;
  const oneHeart = props.oneHeartPressed ? ONE_HEART_PRESSED : ONE_HEART_UNPRESSED;
  const twoHeart = props.twoHeartPressed ? TWO_HEART_PRESSED : TWO_HEART_UNPRESSED;
  //const oneHeart = props.oneHeartPressed ? ONE_HEART_PRESSED : ONE_HEART_UNPRESSED;

  const { containerStyle, skipStyle, iconStyle } = styles;

  return (
    <View style={containerStyle} >
      <Image source={SKIP_UNPRESSED} style={[iconStyle, skipStyle]} />
      <Image source={oneHeart} style={iconStyle} />
      <Image source={twoHeart} style={iconStyle} />
      <Image source={THREE_HEART_PRESSED} style={iconStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
  },
  skipStyle: {
    marginRight: 20,
    width: 30,
  },
  iconStyle: {
    width: 33,
    height: 30,
  },
});

export default SocialBar;
