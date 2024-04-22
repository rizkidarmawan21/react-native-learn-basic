import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Input from '../components/atoms/Input'

const Login = () => {
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
                />

                <Input 
                    label="Email"
                    placeholder="Insert Email"
                    required  
                    keyboardType="email-address"
                />

                <Input 
                    label="Phone Number"
                    placeholder="Insert Phone Number"
                    required  
                    keyboardType="numeric"
                />

                <Input 
                    label="Password"
                    placeholder="Insert Password"
                    required
                    secure
                />

                {/* <Text style={styles.labelLoginInput}>
                    Email
                </Text>
                <TextInput
                    style={styles.loginInput}
                    placeholder='Masukkan email'
                    placeholderTextColor='black'
                    keyboardType="email-address"
                />

                <Text style={styles.labelLoginInput}>
                    Nomor Telepon
                </Text>
                <TextInput
                    style={styles.loginInput}
                    placeholder='Masukkan nomor telepon'
                    placeholderTextColor='black'
                    keyboardType="numeric"
                />

                <Text style={styles.labelLoginInput}>
                    Password
                </Text>
                <TextInput
                    style={styles.loginInput}
                    placeholder='Masukkan password'
                    placeholderTextColor='black'
                    secureTextEntry={true}
                /> */}

                {/* ===== TOMBOL ==== */}

                {/* PRESSABLE */}
                {/* <Pressable 
                    onPress={() => {
                        console.log('asasas')
                    }}
                style={styles.btnLogin}>
                    <Text style={styles.btnLoginText}>
                        Let's Login
                    </Text>
                </Pressable> */}

                {/* TOUCHABEL OPACITY */}
                <TouchableOpacity
                    onPress={() => {
                        console.log('toucbleee')
                    }}
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
    titlePage:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },  
    loginForm: {
        flex: 1,
        justifyContent: 'center',
    },
    loginInput: {
        color: 'black',
        borderWidth: 1,
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginBottom: 10,
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