import React, { Component, PropTypes } from 'react';
import { View, Dimensions, StyleSheet, AppState, InteractionManager, Text, TouchableOpacity, Image } from 'react-native'

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._pressButton = this._pressButton.bind(this)
  }

  _pressButton(router) {
    const { navigator } = this.props;
    navigator && navigator.jump(router)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this._pressButton('Test.SecondPageComponent')}>
          <Text>点我跳转</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._pressButton('AnimationTest.CircularProgress')}>
          <Text>Animation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._pressButton('AnimationTest.CircularSlider')}>
          <Text>CircularSlider</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._pressButton('Test.Flex')}>
          <Text>FlexTest</Text>
        </TouchableOpacity>
      </View>
    );
  }
}