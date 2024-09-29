import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    text: string
    onPress?: () => void
}

const Button = (props: Props) => {
    const { text, onPress } = props
    return (
        <TouchableOpacity onPress={ onPress } style={styles.login}>
            <Text style={styles.loginTitle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    login: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    loginTitle: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 24,
        textAlign: 'center',
    },
})