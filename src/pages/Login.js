import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../components/atoms/Input'

const Login = () => {
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [password, setPassword] = useState('')


    // Jika menggunakan object akan lebih rapih
    const [loginForm, setLoginForm] = useState({
        username: '',
        email: '',
        phoneNumber: '',
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

        if (loginForm.username == '') {
            Alert.alert('Username Kosong', 'Username harus diisi')
            return
        }

        if (loginForm.email == '') {
            Alert.alert('Email Kosong', 'Email harus diisi')
            return
        }

        if (loginForm.phoneNumber == '') {
            Alert.alert('Phone Number Kosong', 'Phone Number harus diisi')
            return
        }

        if (loginForm.password == '') {
            Alert.alert('Password Kosong', 'Password harus diisi')
            return
        }

        // Jika validasi diatas sudah benar, maka akan muncul alert login berhasil
        Alert.alert('Login Berhasil', 'Selamat datang di aplikasi kami')

        // Jika sudah berhasil login, maka form login akan direset menjadi kosong
        setLoginForm({
            username: '',
            email: '',
            phoneNumber: '',
            password: ''
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titlePage}>
                Halaman Login
            </Text>
            <View style={styles.loginForm}>
                <Input
                    label="Username"
                    placeholder="Insert Username"
                    required
                    value={loginForm.username}
                    onChange={(isiText) => {
                        setLoginForm({
                            ...loginForm,
                            username: isiText
                        })
                    }}
                />

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
                    label="Phone Number"
                    placeholder="Insert Phone Number"
                    required
                    keyboardType="numeric"
                    value={loginForm.phoneNumber}
                    onChange={(isiText) => {
                        setLoginForm({
                            ...loginForm,
                            phoneNumber: isiText
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