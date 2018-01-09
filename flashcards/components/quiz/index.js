import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { styles } from './styles'

class Quiz extends Component {

  state = {
    start: 1,
    end: 0,
    showAnswer: false
  }
  
  componentDidMount() {
    const { questions } = this.props.navigation.state.params

    this.setState({
      end: questions.length
    })
  }

  showAnswer = () => {
    this.setState({
      showAnswer: true
    })
  }

  current = () => {
    const { questions } = this.props.navigation.state.params
    const { start } = this.state

    return (
      <View>
        <Text style={styles.title}>{questions[start].question}</Text>

        {this.state.showAnswer &&
          <Text style={styles.answer}>{questions[start].answer}</Text>
        }

        <Button
          title="Answer"
          onPress={() => this.showAnswer()}
        />

        <Button
          title="Correct"
          color="green"
          disabled={!this.state.showAnswer}
        />
        <Button
          title="Incorrect"
          color="red"
          disabled={!this.state.showAnswer}
        />
      </View>
    )
  }

  render() {
    const { start, end } = this.state
    let content

    if( start !== end ) {
        content = this.current()
    }

    return (
      <View>
        {content}
      </View>
    )
  }
}

export default Quiz