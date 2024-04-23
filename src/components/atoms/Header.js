import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {text}
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})