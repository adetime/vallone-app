import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class App extends React.Component {
  render() {

    const imageSource = require('./src/assets/Alexandra.jpg');
    return (
      <View style={styles.container}>

        <View style={styles.headerStyle}>
        </View>        

        <View style={styles.cardStyle}>
          <Image source={imageSource} style={styles.imageStyle} />
          <Text>Alexandra, 24</Text>
        </View>

        <View style={styles.footerStyle}>
        </View>





      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle: {
    width: 300,
    height: 500,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardStyle2: {
    width: 300,
    height: 500,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,

  },
  imageStyle: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle2: {
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerStyle: {
    width: 300,
    height: 90,
    backgroundColor: 'orange',
  },
  headerStyle: {
    width: 300,
    height: 60,
    backgroundColor: 'red',
  },
});

Exponent.registerRootComponent(App);
