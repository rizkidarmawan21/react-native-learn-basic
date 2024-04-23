import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/atoms/Header'

const Transaction = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header text="Transaction" />
            <Text style={styles.title}>Transaction List</Text>
            <ScrollView>
                {[1, 2, 3, 4, 5,6,7,8,8,9,10,11,12,13,14,15].map((item, index) => (
                    <View style={styles.cardList} key={index}>
                        <Image source={{ uri: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/16/47686e2b-ccbb-4bc3-8612-99cdf9429f0b.png' }} style={styles.cardImage} />
                        <View>
                            <Text style={styles.cardTitle}>1 Set PC Gaming </Text>
                            <Text style={styles.cardTitle}>
                                20/12/2022
                            </Text>
                        </View>
                        <View style={styles.cardEnd}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnLabel}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Transaction

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
    cardList: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        gap: 10,
    },
    cardImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    cardEnd: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    cardBtn: {
        backgroundColor: '#8708ff',
        color: 'white',
        paddingHorizontal: 13,
        paddingVertical: 5,
        borderRadius: 50,
    },
    cardBtnLabel: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
})