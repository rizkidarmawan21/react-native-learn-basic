import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const TabBar = ({ handleTab, activeTab }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleTab('Transaction')} >
                <Text style={activeTab === 'Transaction' ? styles.tabItemActive : styles.tabItem}>Transaction</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTab('Products')}>
                <Text style={activeTab === 'Products' ? styles.tabItemActive : styles.tabItem}>Products</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    tabItem: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    tabItemActive: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
})
