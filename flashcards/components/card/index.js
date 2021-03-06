import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'

import { styles } from './styles'

class Card extends Component {

  state = {
    added: false,
    title: '',
    questions: [],
    currentQuestion: {
      question: '',
      answer: ''
    },
    cardTitle: '',
    description: '',
    allDecks: {}
  }

  componentDidMount() {
    const { state } = this.props.navigation

    this.setState({
      title: state.params.title,
      questions: state.params.questions
    }, () => {
      this.getAllDecks()
    })
  }

  back = () => {
    const { navigation } = this.props
    const { currentQuestion } = this.state
    const questions = (navigation.state.params.questions) ? navigation.state.params.questions : []
    const newQuestion = questions.concat(currentQuestion)

    const backAction = navigation.navigate('Details',{
      title: navigation.state.params.title,
      questions: newQuestion
    })

    this.props.navigation.dispatch(backAction)
  }

  callbackForUser = () => {
    this.setState({
      added: true
    })
  }

  getAllDecks = () => {
    AsyncStorage.getItem('decks').then((decks) => {
      if(decks) {
        this.setState({
          allDecks: JSON.parse(decks)
        })
      }
    })
  }

  setDeck = obj => {
    AsyncStorage.setItem('decks', JSON.stringify(obj)).then(this.callbackForUser())
  }

  handleInputCardTitle = el => {
    this.setState({
      cardTitle: el
    })
  }

  handleInputDescription = el => {
    this.setState({
      description: el
    })
  }

  decksMerge = newQuestion => {
    const { allDecks, title } = this.state
    const copyAllDecks = Object.assign({}, allDecks)

    Object.values(copyAllDecks).map(deck => {
      if(deck.title === title) {
        deck.questions.push(newQuestion)
      }
    })

    this.setDeck(copyAllDecks)
  }

  onCreate = () => {
    const { currentQuestion, cardTitle, description } = this.state

    this.setState({
      currentQuestion: {
        question: cardTitle,
        answer: description
      }
    }, () => {
      this.decksMerge(this.state.currentQuestion)
    })
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.cardWrapper}>

        {this.state.added &&
          <View>
            <Text>Success :)</Text>
            <Button
              onPress={() => this.back()}
              title="Back"
            />
          </View>
        }

        {!this.state.added &&
          <View>
            <TextInput
              name="cardTitle"
              style={styles.input}
              placeholder="Card title"
              onChangeText={this.handleInputCardTitle}
              value={this.state.cardTitle}
            />

            <TextInput
              name="description"
              style={styles.input}
              placeholder="Card description"
              onChangeText={this.handleInputDescription}
              value={this.state.description}
            />

            <Button
              onPress={() => this.onCreate()}
              title="Submit"
            />
          </View>
        }
      </View>
    )
  }
}

export default Card