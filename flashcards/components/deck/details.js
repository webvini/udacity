import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { styles } from './styles'

class Details extends Component {

  temp = () => {
    return
  }

  render() {
    const { state } = this.props.navigation
    console.log(this.props)
    return (
      <View style={styles.detailsWrapper}>
        <View>
          <Text style={styles.title}>{state.params.title}</Text>
          <Text style={styles.description}>{state.params.qtd} card(s)</Text>
        </View>

        <View>
          <Button title="Add Card" onPress={this.temp} />
          <Button title="Start Quiz" onPress={this.temp} />
        </View>
      </View>
    )
  }
}

export default Details