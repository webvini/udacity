import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'
import { MainNavigation } from '../../navigation'

const Home = () => {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  )
}

export default Home