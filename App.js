import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Inline Styles */}
      <View style={{ backgroundColor: 'red', padding: 10 }}>
        <Text style={{ color: 'yellow' }}>Hallo Joni</Text>
      </View>

      {/* Using StyleSheet */}
      <View style={styles.latarbelakang}>
        <Text style={styles.judulLatarBelakang}>
          Selamat Datang di Joshop
        </Text>
      </View>

      <View style={styles.latarbelakang}>
        <Text>
          Ingin beli apa hari ini?
        </Text>
      </View>

      {/* ScrollView */}
      <View style={{ flex:1 }}>
        <ScrollView contentContainerStyle={stylesProduk.row}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
            <View key={item} style={stylesProduk.card}>
              <Image source={{ uri: 'https://img.ws.mms.shopee.co.id/sg-11134201-23020-8hnqqeirj0mv73' }} style={stylesProduk.gambarProduk} />
              <Text style={stylesProduk.namaProduk}>Kaos Hitam Kurir Shopee</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const stylesProduk = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'yellow',
    paddingVertical: 10,
  },
  card: {
    borderWidth: 2,
    borderColor: 'skyblue',
    borderRadius: 10,
    width: 140,
    height: 200,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
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
    textDecorationLine: 'underline',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'red',
  },
  latarbelakang: {
    backgroundColor: 'pink',
    padding: 10,
    marginTop: 10,
  },
  judulLatarBelakang: {
    color: 'blue',
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Arial',
  },
});

export default App;
