import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native'

import { styles } from './styles'

class Card extends Component {

  state = {
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
    AsyncStorage.setItem('decks',  JSON.stringify(obj))
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
    }else{
      console.log('ja existe')
    }

    this.setDeck(Object.assign(allDecks, obj))
  }

  render() {
    return (
      <View style={styles.cardWrapper}>
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
    )
  }
}

export default Card