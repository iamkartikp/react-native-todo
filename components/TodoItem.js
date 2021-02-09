import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={ () => pressHandler(item.key)}>
            <Text style={styles.textView}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textView: {
        color: 'black',
        padding: 16,
        marginTop: 16,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed'
      },
})

export default TodoItem;