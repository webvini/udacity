import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { setLocalNotification } from './utils/helpers'

import { MainNavigation } from './navigation'

class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <View style={styles.containerWrapper}>
        <MainNavigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1
  },
})

export default App