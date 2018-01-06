import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { styles } from './styles'

class Quiz extends Component {

  current = () => {
    return (
      <View>
        <Text style={styles.title}>O que é React?</Text>
        <Button title="Answer" />

        <Button title="Correct" color="green" />
        <Button title="Incorrect" color="red" />
      </View>
    )
  }

  render() {
    console.log(this.props)
    return (
      <View>
        {this.current()}
      </View>
    )
  }
}

export default Quiz