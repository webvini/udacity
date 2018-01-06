import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Quiz extends Component {

  current = () => {
    return (
      <View>
        <Text>O que é React?</Text>
        <Button>Answer</Button>

        <Button>Correct</Button>
        <Button>Incorrect</Button>
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.current()}
      </View>
    )
  }
}

export default Quiz