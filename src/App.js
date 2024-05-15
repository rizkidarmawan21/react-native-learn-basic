import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#00B14F"
      />

      {/* Searching Section */}
      <View>
        <View style={styles.searchBg}></View>
        <View style={styles.boxSearch}>
          <View style={styles.boxIconSearch}>
            <AntDesign name="search1" size={20} color="black" />
            <TextInput
              style={styles.searchInput}
              placeholder="Cari di aplikasi Grab"
              placeholderTextColor="#9D9D9D"
            />
          </View>
          <View style={styles.boxScan}>
            <Ionicons name="scan" size={20} color="black" />
          </View>
        </View>
      </View>

      {/* Categories */}
      <View style={{
        marginHorizontal: 20,
        marginVertical: 10,
      }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <View style={styles.itemCategory} key={index}>
                <Image style={{
                  width: 50,
                  height: 50,
                }} source={require('./assets/images/categories/food.png')} />
                <Text style={{ marginTop: 4, color: 'black', fontSize: 12 }}>
                  Makanan
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>


      {/* Banner Promo */}
      <View style={{
        marginHorizontal: 20,
        marginVertical: 10,
      }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <View style={styles.itemBannerPromo} key={index}>

                <Text style={{ marginBottom: 5, color: 'black', fontSize: 16 }}>
                  Jajan Sekarang
                </Text>

                <Image style={{
                  width: 310,
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 10,
                }} source={require('./assets/images/banner/promo1.png')} />

                <Text style={{ marginTop: 4, color: 'black', fontSize: 13 }}>
                  Jajan Menu Inceran Selama Liburan
                </Text>
                <Text style={{ marginTop: 4, color: '#707070', fontSize: 12 }}>
                  Disponsori oleh Mbok Berek
                </Text>

              </View>
            ))}
          </View>
        </ScrollView>
      </View>


      {/* Rekomendasi Resto */}
      <View style={{
        marginHorizontal: 20,
        marginVertical: 10,
      }}>
        <Text style={{ marginBottom: 5, color: 'black', fontSize: 16 }}>
          Rekomendasi restoran untukmu
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <View style={styles.itemBannerPromo} key={index}>
                <Image style={{
                  width: 150,
                  height: 140,
                  objectFit: 'cover',
                  borderRadius: 10,
                }} source={require('./assets/images/products/gacoan.png')} />

                <Text style={{ marginTop: 4, color: 'black', fontSize: 13 }}>
                  Mie Gacoan - Lempongsari
                </Text>
                <Text style={{ marginTop: 4, color: '#707070', fontSize: 12 }}>
                  0.9 km ⭐ 4.7
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{
                    marginTop: 4,
                    color: 'black',
                    fontSize: 11,
                    fontWeight: 'bold',
                    paddingHorizontal: 5,
                    paddingVertical: 3,
                    backgroundColor: '#FFF4EB',
                  }}>
                    HEMAT 40rb
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>



    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchBg: {
    backgroundColor: '#00B14F',
    height: 40,
  },
  boxSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -20,
    // height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 5 },
    elevation: 20,
    shadowColor: '#625F5F',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  boxIconSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  searchInput: {
    width: '90%',
    height: 45,
    color: 'black',
    // backgroundColor: 'yellow',
    fontSize: 14,
  },
  boxScan: {
    width: '13%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0.3,
  },
  itemCategory: {
    marginRight: 15,
    // marginHorizontal: 20,
    // marginVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemBannerPromo: {
    marginRight: 10,
    // marginHorizontal: 20,
    // marginVertical: 10,
    flex: 1,
  }
})