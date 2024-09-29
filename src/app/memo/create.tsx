import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import MemoItemAdd from '../../components/MemoItemAdd'
import Icon from '../../components/icon'

const create = () => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      
      <Header />

      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} />
      </View>
      
      <MemoItemAdd>
        <Icon name='check' size={40} color='#ffffff' />
      </MemoItemAdd>

    </KeyboardAvoidingView>
  )
}

export default create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  input: {
    flex: 1,
    // AOS
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})