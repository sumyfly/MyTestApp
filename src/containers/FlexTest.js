import React, { Component, PropTypes } from 'react';
import { View, Dimensions, StyleSheet, ScrollView, AppState, InteractionManager, Text, TouchableOpacity, Image } from 'react-native'

export default class FlexTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton() {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate('FirstPageComponent');
    }
  }

  render() {
    return (
      <View style={[styles.container, styles.column, { borderColor: 'red', borderWidth: 1 }]}>
        <View style={[styles.row,{ borderColor: 'blue', borderWidth: 2, paddingBottom:50 }]}>
          <View style={[{ borderColor: 'orange', borderWidth: 2 }]}>
            <View style={styles.rect} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column'
  },
  rect: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }
})