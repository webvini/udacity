import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class CardCreate extends Component {
  render() {
    return (
      <View style={styles.cardWrapper}>
        <Text>Details</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1
  }
})

export default CardCreate