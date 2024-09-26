import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hello from './src/components/Hello'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello bang={true}>World</Hello>
      <Text>Aora! Aora! Aora!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
