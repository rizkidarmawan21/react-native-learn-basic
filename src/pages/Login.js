import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../components/atoms/Input'
import { getData, storeData } from '../storages/localStorage'
import axios from 'axios'

const Login = ({ navigation }) => {
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [password, setPassword] = useState('')


    // Jika menggunakan object akan lebih rapih
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })


    function submitLogin() {
        // const username = 'admin'

        // if (loginForm.username != username) {
        //     Alert.alert('Username Salah', 'Username yang anda masukkan salah')
        //     return
        // }

        // Alert.alert('Login Berhasil', 'Selamat datang di aplikasi kami')


        // Validasi Semua Harus Diisi

        if (loginForm.email == '') {
            Alert.alert('Email Kosong', 'Email harus diisi')
            return
        }

        if (loginForm.password == '') {
            Alert.alert('Password Kosong', 'Password harus diisi')
            return
        }

        // Jika validasi diatas sudah benar, maka akan muncul alert login berhasil
        // Alert.alert('Login Berhasil', 'Selamat datang di aplikasi kami')

        // Untuk menyimpan data login ke local storage
        // storeData('auth', loginForm)

        // Jika sudah berhasil login, maka form login akan direset menjadi kosong
        // setLoginForm({
        //     email: '',
        //     password: ''
        // })

        // Redirect ke halaman home
        // navigation.replace('Main')

        // axios.post('https://example-api.darms.my.id/api/login', {
        //     email: loginForm.email,
        //     password: loginForm.password
        // })

        axios.post('https://example-api.darms.my.id/api/login', loginForm )
        .then((response) => {
            Alert.alert('Login Berhasil', 'Selamat datang di aplikasi kami')
            
            const res = response.data
            storeData('auth', res.user)
            storeData('token', res.token)

            navigation.replace('Main')
        }).catch((error) => {
            const err = error.response.data
            Alert.alert('Login Gagal', err.message)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titlePage}>
                Halaman Login
            </Text>
            <View style={styles.loginForm}>

                <Input
                    label="Email"
                    placeholder="Insert Email"
                    required
                    keyboardType="email-address"
                    value={loginForm.email}
                    onChange={(isiText) => {
                        setLoginForm({
                            ...loginForm,
                            email: isiText
                        })
                    }}
                />

                <Input
                    label="Password"
                    placeholder="Insert Password"
                    required
                    secure
                    value={loginForm.password}
                    onChange={(isiText) => {
                        setLoginForm({
                            ...loginForm,
                            password: isiText
                        })
                    }}
                />

                {/* TOUCHABEL OPACITY */}
                <TouchableOpacity
                    onPress={() => submitLogin()}
                    style={styles.btnLogin}>
                    <Text style={styles.btnLoginText}>
                        Let's Login
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    titlePage: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    loginForm: {
        flex: 1,
        justifyContent: 'center',
    },
    btnLogin: {
        backgroundColor: '#3d67e3',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,
    },
    btnLoginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    }
})