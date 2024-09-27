import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View>
        <View>
          <Text>rn memo</Text>
          <Text>Logout</Text>
        </View>
      </View>

      <View>

        <View>
          <View>
            <View>
              <Text>LIST 🔓 [A]</Text>
              <Text>22.11.1995</Text>
            </View>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>LIST 🔓 [A]</Text>
              <Text>22.11.1995</Text>
            </View>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>LIST 🔓 [A]</Text>
              <Text>22.11.1995</Text>
            </View>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>LIST 🔓 [A]</Text>
              <Text>22.11.1995</Text>
            </View>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

      </View>

      <View>
        <Text>✚</Text>
      </View>

    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})