import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'

const login = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.createContainer}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} value='Email address' />
                <TextInput style={styles.input} value='Password' />
                <Button text='submit'/>
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Not yet registered?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    createContainer: {
        paddingVertical: 24,
        paddingHorizontal: 27,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        backgroundColor: '#ffffff',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        height: 48,
        padding: 8,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        paddingRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }
})