import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { styles } from './styles'

class Card extends Component {
  render() {
    return (
      <View style={styles.cardWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Card title"
        />

        <TextInput
          style={styles.input}
          placeholder="Card description"
        />

        <Button
          onPress={() => navigation.navigate('card')}
          title="Submit"
        />
      </View>
    )
  }
}

export default Card