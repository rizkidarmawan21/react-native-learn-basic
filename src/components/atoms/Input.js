import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Label from './Label'

const Input = ({
  label,
  required,
  placeholder,
  keyboardType = 'default',
  secure,
  onChange,
  value
}) => {
  return (
    <View>
      <Label text={label} required={required} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='black'
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onChange}
        value={value}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    color: 'black',
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 10,
  }
})