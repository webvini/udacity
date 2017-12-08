import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

class CardCreate extends Component {

  state = {
    disabledButton: true
  }

  onChangedText = title => {
    this.setState({
      disabledButton: !title
    })
  }

  render() {

    console.log(this.props)

    return (
      <View style={styles.cardWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Card title"
          onChangeText={this.onChangedText}
        />

        <TextInput
          style={styles.input}
          placeholder="Card description"
          onChangeText={this.onChangedText}
        />

        <Button
          onPress={() => navigation.navigate('cardCreate')}
          title="Submit"
          disabled={this.state.disabledButton}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    padding: 20,
  },
  input: {
    color: '#999',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  }
})

export default CardCreate