import React, { useState } from 'react'

import { View, TextInput, StyleSheet, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const [ value, setValue ] = useState('')

    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        }
        else {
            Alert.alert('Введите название дела')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder="Введите название дела..."
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="number-pad" />
            <Button title="Добавить" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderBottomColor: '#3949ab',
        borderStyle: 'solid',
        borderBottomWidth: 2
    }
})