import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import MemoItem from '../../components/MemoItem'
import MemoItemAdd from '../../components/MemoItemAdd'
import Icon from '../../components/icon'


const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoItem />
      </View>
      <MemoItemAdd>
        <Icon name='plus' size={40} color='#ffffff'/>
      </MemoItemAdd>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
})