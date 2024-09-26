import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    children: string
    bang?: boolean
}

const Hello = (props: Props) => {
    const { children, bang } = props
    return (
        <View>
            <Text style={styles.text}>
                Hello {children} {bang === true ? '🔓' : '🔐'}
            </Text>
        </View>
    )
}

export default Hello

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})