import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import MemoItem from '../components/MemoItem'
import MemoItemAdd from '../components/MemoItemAdd'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
      </View>
      <MemoItemAdd>a</MemoItemAdd>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
})