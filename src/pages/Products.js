import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/atoms/Header'

const Products = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header text="Products" />
            <Text style={styles.title}>Products List</Text>

            <View style={{ flex: 1, marginBottom:10 }}>
                <ScrollView contentContainerStyle={styles.row}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
                        <View style={styles.cardList} key={index}>
                            <Image source={{ uri: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/16/47686e2b-ccbb-4bc3-8612-99cdf9429f0b.png' }} style={styles.cardImage} />
                            <View>
                                <Text style={styles.cardTitle}>1 Set PC Gaming </Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },

    title: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'black',
    },

    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        marginVertical: 10,
    },

    cardList: {
        backgroundColor: '#fff',
        width: '45%',
        marginHorizontal: '2.5%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },

    cardImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderRadius: 5,
    },

    cardTitle: {
        marginVertical: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
})