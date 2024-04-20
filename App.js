import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Inline Styles */}
      <View style={{ backgroundColor: 'red' }}>
        <Text style={{ color: 'yellow' }}>
          Hello World
        </Text>
      </View>

      {/* Using StyleSheet */}
      <View style={styles.latarbelakang}>
        <Text style={styles.judulLatarBelakang}>
          Hello Karimun Jawa
        </Text>
      </View>

      <View style={gaya.latarbelakang}>
        <Text>
          Hello Bali
        </Text>
      </View>



      {/* ================= */}
      <ScrollView contentContainerStyle={stylesProduk.row}>
        {[...Array(10)].map((_, i) => (
          <View key={i} style={stylesProduk.card}>
            <Image source={{ uri: 'https://img.ws.mms.shopee.co.id/sg-11134201-23020-8hnqqeirj0mv73' }} style={stylesProduk.gambarProduk} />
            <Text style={stylesProduk.namaProduk}>
              Kaos Hitam Kurir Shopee
            </Text>
          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  )
}

const stylesProduk = StyleSheet.create({
  row: {
    flexDirection: 'row', // change this to column
    flexWrap: 'wrap',
    backgroundColor: 'yellow',
  },
  card: {
    borderWidth: 2,
    borderColor: 'skyblue',
    borderRadius: 10,
    // borderTopRightRadius: 100,
    // borderBottomLeftRadius: 100,
    width: 140,
    height: 200,
    backgroundColor: 'white',
    padding: 10,
    margin: 10
  },
  gambarProduk: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    marginBottom: 5,
  },
  namaProduk: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }

})

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    // marginHorizontal: 20,
    // marginVertical: 20,
    // marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    backgroundColor: 'red',
  },
  latarbelakang: {
    backgroundColor: 'pink',

  },
  judulLatarBelakang: {
    color: 'blue',
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Arial'
  }
})

const gaya = StyleSheet.create({
  latarbelakang: {
    backgroundColor: 'green'
  }
})

export default App