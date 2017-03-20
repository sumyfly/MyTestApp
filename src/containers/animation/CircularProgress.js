import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React, { Component, PropTypes } from 'react';
import { View, Dimensions, StyleSheet, AppState, InteractionManager, Text, TouchableOpacity, Image } from 'react-native'

export default class SecondPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>点我跳回去</Text>
        </TouchableOpacity>

        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={100}
          tintColor="#00e0ff"
          backgroundColor="#3d5875" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})