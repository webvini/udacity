import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { styles } from './styles'

class Details extends Component {
  render() {
    return (
      <View style={styles.detailsWrapper}>
        <View>
          <Text style={styles.title}>Javascript</Text>
          <Text style={styles.description}>10 card(s)</Text>
        </View>

        <View>
          <Button title="Add Card" />
          <Button title="Start Quiz" />
        </View>
      </View>
    )
  }
}

export default Details