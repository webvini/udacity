import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'

import { styles } from './styles'

class Card extends Component {

  state = {
    added: false,
    title: '',
    cardTitle: '',
    description: '',
    allDecks: []
  }

  componentDidMount() {
    const { state } = this.props.navigation

    this.setState({
      title: state.params.title
    }, () => {
      this.getAllDecks()
    })
  }

  back = () => {
    const backAction = NavigationActions.back({
      key: 'Deck'
    })

    this.props.navigation.dispatch(backAction)
    this.props.navigation.navigate('card')
  }

  callbackForUser = () => {
    this.setState({
      added: true
    })
  }

  isNewDeck = () => {
    const { allDecks, title } = this.state
    const result = Object.values(allDecks).filter((deck) => deck.title === title)

    return (result.length <= 0) ? true : false
  }

  getAllDecks = () => {
    AsyncStorage.getItem('decks').then((decks) => {
      this.setState({
        allDecks: JSON.parse(decks)
      })
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

    Object.values(allDecks).map(deck => {
      if(deck.title === title) {
        deck.questions.push(newQuestion)
      }
    })

    this.setDeck(allDecks)
  }

  onCreate = () => {
    const { allDecks, title, cardTitle, description } = this.state
    const questions = {}
    const obj = {}

    questions.question = cardTitle
    questions.answer = description

    if(this.isNewDeck()) {
      obj[title] = {
        title: title,
        questions: [questions]
      }

      this.setDeck(Object.assign(allDecks, obj))
    }else{
      this.decksMerge(questions)
    }
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