import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native'

import { styles } from './styles'

class NewDeck extends Component {

  state = {
    allDecks: {},
    title: '',
    questions: [],
    disabledButton: true
  }

  componentDidMount() {
    this.getAllDecks()
  }

  onChangedText = title => {
    this.setState({
      title,
      disabledButton: !title
    })
  }

  callbackForUser = () => {
    const { navigation } = this.props
    const { title, questions } = this.state
    const goTo = navigation.navigate('Details',{
      title,
      questions
    })

    navigation.dispatch(goTo)
  }

  isNewDeck = () => {
    const { allDecks, title } = this.state
    const result = Object.values(allDecks).filter((deck) => deck.title === title)

    return (result.length <= 0)
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

  getQuestions = () => {
    const { allDecks, title, questions } = this.state

    Object.values(allDecks).map(deck => {
      if(deck.title === title) {
        this.setState({
          questions: Object.assign(questions, deck.questions)
        })
      }
    })
  }

  onCreate = () => {
    const { allDecks, title } = this.state
    const obj = {}

    this.getQuestions()

    if(this.isNewDeck()) {
      obj[title] = {
        title,
        questions: []
      }
      this.setDeck(Object.assign(allDecks, obj))
    }else{
      this.callbackForUser()
    }
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.newDeckWrapper}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <TextInput
          style={styles.input}
          placeholder="Deck title"
          onChangeText={this.onChangedText}
        />

        <Button
          onPress={() => this.onCreate()}
          title="Submit"
          disabled={this.state.disabledButton}
        />
      </View>
    )
  }
}

export default NewDeck