import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { MainNavigation } from './navigation'

const App = () => {
  return (
    <View style={styles.containerWrapper}>
      <MainNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1
  },
})

export default App