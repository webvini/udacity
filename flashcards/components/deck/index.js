import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { styles } from './styles'
import { toDeckDetails } from '../../navigation'

// import { fetchDecks } from '../actions'

class Deck extends Component {

  // componentDidMount() {
  //   this.props.fetchDecks()
  // }

  decks = () => {
    const { navigation } = this.props

    return (
      <TouchableHighlight onPress={() => navigation.navigate('Details')}>
        <View style={styles.deckWrapper}>
          <Text style={styles.title}>Javascript</Text>
          <Text style={styles.description}>10 card(s)</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View>
        { this.decks() }
      </View>
    )
  }
}

// function mapStateToProps({ decks }) {
//   return {
//     decks
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDecks: () => dispatch(fetchDecks())
//   }
// }

// export default connect({
//   mapStateToProps,
//   mapDispatchToProps
// })(Deck)

export default Deck