import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { styles } from './styles'

class Details extends Component {

  render() {
    const { state, navigation } = this.props
    const length = (navigation.state.params.questions) ? navigation.state.params.questions.length : 0

    return (
      <View style={styles.detailsWrapper}>
        <View>
          <Text style={styles.title}>{navigation.state.params.title}</Text>
          <Text style={styles.description}>{length} card(s)</Text>
        </View>

        <View>
          <Button
            title="Add Card"
            onPress={() => navigation.navigate('card',
              { title: navigation.state.params.title, questions: navigation.state.params.questions }
            )}
          />

          <Button
            title="Start Quiz"
            onPress={() => navigation.navigate('Quiz',
              { title: navigation.state.params.title, questions: navigation.state.params.questions }
            )}
            disabled={(length <= 0)}
          />
        </View>
      </View>
    )
  }
}

export default Details