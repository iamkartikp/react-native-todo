import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const AddTodo = ({ submitHandler }) => {

    const [text, setText] = useState('');

    const changeHandler = val => {
        setText(val);
    }

    return (
        <View>
            <TextInput style={styles.inputText} 
                placeholder='Eg: Buy Soap' 
                onChangeText={changeHandler}    
            />
            <Button onPress={ () => submitHandler(text) } title='Add a Todo' />
        </View>
    )
}

const styles = StyleSheet.create({
    inputText : {
        borderColor: 'black',
        backgroundColor: '#e3e6e4',
        padding: 10,
        paddingHorizontal: 50,
        marginTop: 10,
        borderRadius: 10
      }
})

export default AddTodo;
