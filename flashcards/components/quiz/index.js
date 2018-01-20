import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { clearLocalNotification } from '../../utils/helpers'

import { styles } from './styles'

class Quiz extends Component {

  state = {
    start: 0,
    end: 0,
    correct: 0,
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

  answer = value => {
    const { correct, start } = this.state
    let count = (value) ? 1 : 0

    this.setState({
      showAnswer: false,
      correct: (correct + count),
      start: (start + 1)
    })
  }

  back = () => {
    const { navigation } = this.props

    const backAction = navigation.navigate('Details',{
      title: navigation.state.params.title,
      questions: navigation.state.params.questions
    })

    this.props.navigation.dispatch(backAction)
  }

  contentDone = () => {
    const { state, navigate } = this.props.navigation

    clearLocalNotification();
    
    return (
      <View>
        <Text style={styles.done}>{this.state.correct} Answer correct :)</Text>

        <Button
          title="Back Decks"
          onPress={() => this.back()}
        />

        <Button
          title="Restart Quiz"
          onPress={() => navigate('Quiz',
            { title: state.params.title, questions: state.params.questions }
          )}
        />
      </View>
    )
  }

  current = () => {
    const { questions } = this.props.navigation.state.params
    const { start, end } = this.state

    return (
      <View>
        <Text style={styles.step}>{`${start+1} / ${end}`}</Text>

        <Text style={styles.title}>{questions[start].question}</Text>

        {this.state.showAnswer &&
          <Text style={styles.answer}>{questions[start].answer}</Text>
        }

        <Button
          title="Show Answer"
          onPress={() => this.showAnswer()}
        />

        <Button
          title="Correct"
          color="green"
          disabled={!this.state.showAnswer}
          onPress={() => this.answer(true)}
        />
        <Button
          title="Incorrect"
          color="red"
          disabled={!this.state.showAnswer}
          onPress={() => this.answer(false)}
        />
      </View>
    )
  }

  render() {
    const { start, end } = this.state

    let content = ( start < end ) ? this.current() : this.contentDone()

    return (
      <View>
        {content}
      </View>
    )
  }
}

export default Quiz