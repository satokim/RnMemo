import { 
    StyleSheet, 
    Text,
    View,
    ViewStyle, 
    TouchableOpacity,
    Alert
 } from 'react-native'

import React from 'react'

interface Props {
    children?: JSX.Element
    style?: ViewStyle
}

const MemoItemAdd = (props: Props) => {
    const { children, style } = props
    return (
        <TouchableOpacity onPress={()=>{Alert.alert('Add')}} style={[styles.addBtn, style]}>
            <Text style={styles.addTitle}>{children}</Text>
        </TouchableOpacity>
    )
}

export default MemoItemAdd

const styles = StyleSheet.create({
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
        shadowOffset: { width: 0, height: 8 },
        // Android
        elevation: 8
      },
      addTitle: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 45
      }
})