import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/atoms/Input'
import axios from 'axios'

const CreateTodo = ({ navigation }) => {
    const [todo, setTodo] = useState()


    const saveTodo = () => {
        axios.post('http://localhost:3000/todo', {
            title: todo,
            completed: false,
        })
            .then((response) => {
                Alert.alert('Success', 'Todo has been saved')
                navigation.navigate('Todolist')
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    label="Todo"
                    placeholder="Insert Todo"
                    required
                    value={todo}
                    onChange={(isiText) => {
                        setTodo(isiText)
                    }}
                />

                <TouchableOpacity
                    onPress={() => saveTodo()}
                    style={styles.btnLogin}>
                    <Text style={styles.btnLoginText}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateTodo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    form: {
        marginHorizontal: 20,
        marginTop: 20,
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
    },
})