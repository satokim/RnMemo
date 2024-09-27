import { StyleSheet, Text, View, type TextStyle } from 'react-native'
import React from 'react'

interface Props {
    children: string
    bang?: boolean
    style?: TextStyle
}

const Hello = (props: Props) => {
    const { children, bang, style } = props
    return (
        <View>
            <Text style={[styles.text, style]}>
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