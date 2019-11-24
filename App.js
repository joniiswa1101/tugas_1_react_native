/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import Header from "./Header";
import Footer from "./Footer";
import MenuGame from "./Component/MenuGame";
import MenuBerita from "./Component/MenuBerita";
import MenuHits from "./Component/MenuHits";

// type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View >
        <StatusBar backgroundColor="blue" />
        <Header />
        <MenuGame />
        <MenuBerita />
        <MenuHits />
        <Footer />
      </View>
      );
  }
}

// export default App;
