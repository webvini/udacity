import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { MainNavigation } from './navigation'

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
})

export default App