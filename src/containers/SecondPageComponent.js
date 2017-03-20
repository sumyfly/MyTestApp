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