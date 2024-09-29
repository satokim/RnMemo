import { StyleSheet, Text, View, Alret, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from './icon'

const MemoItem = () => {
    return (
        <View style={styles.listItem}>
            <View>
                <Text style={styles.listItemTitle}>LIST 🔓 [A]</Text>
                <Text style={styles.listItemDate}>22.11.1995</Text>
            </View>
            <TouchableOpacity>
                <Icon name='delete' size={32} color='#B0B0B0'/>
            </TouchableOpacity>
        </View>
    )
}

export default MemoItem

const styles = StyleSheet.create({
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
})