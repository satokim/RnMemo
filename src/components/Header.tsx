import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
    <View style={styles.headerInner}>
      <Text style={styles.headerTitle}>rn memo</Text>
      <Text style={styles.headerRight}>Logout</Text>
    </View>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
      },
      header: {
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end'
      },
      headerInner: {
        alignItems: 'center'
      },
      headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: '#rgba(255,255,255,0.7)'
      },
      headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
      }
})