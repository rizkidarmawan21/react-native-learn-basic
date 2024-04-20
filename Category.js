import { View, Text } from 'react-native'
import React from 'react'

const Category = ({
    namaCategory = 'Category',
    selected = false
}) => {
    return (
        <View>
            <Text style={{
                backgroundColor: selected ? 'blue' : 'grey',
                paddingHorizontal: 15,
                paddingVertical: 5,
                color: 'white',
                borderRadius: 100,
                marginLeft: 10
            }}>
                {namaCategory}
            </Text>
        </View>
    )
}

export default Category