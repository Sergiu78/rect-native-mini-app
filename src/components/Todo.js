import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove, onOpen }) => {

    
    return (
        <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={() => onOpen(todo.id)}
        onLongPress={() => onRemove(todo.id)}>
        <View style={styles.todo}>
            <Text>{ todo.title }</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderWidth:1,
        borderColor: 'grey',
        borderRadius: 5,
        marginBottom: 10
    }
   
})