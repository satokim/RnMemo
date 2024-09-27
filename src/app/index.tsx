import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>rn memo</Text>
          <Text style={styles.headerRight}>Logout</Text>
        </View>
      </View>

      <View>

        <View style={styles.listItem}>
          <View>
            <Text style={styles.listItemTitle}>LIST 🔓 [A]</Text>
            <Text style={styles.listItemDate}>22.11.1995</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <View>
            <Text style={styles.listItemTitle}>LIST 🔓 [A]</Text>
            <Text style={styles.listItemDate}>22.11.1995</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <View>
            <Text style={styles.listItemTitle}>LIST 🔓 [A]</Text>
            <Text style={styles.listItemDate}>22.11.1995</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

      </View>

      <View style={styles.addBtn}>
        <Text style={styles.addTitle}>✚</Text>
      </View>

    </View>
  )
}

export default Index

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
  },
  listItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  listItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  listItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  addBtn: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // iOS
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 8},
    // Android
    elevation: 8
  },
  addTitle: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 45
  }
})