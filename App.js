import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Code', key: 1},
    {name: 'Eat', key: 2},
    {name: 'Sleep', key: 3},
  ])

  const pressHandler = key => {
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.key !== key);
    })
  }

  const submitHandler = text => {
    setPeople((prevPeople) => {
      return [
        { name: text, key: Math.random().toString() },
        ...prevPeople
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddTodo submitHandler={submitHandler} />
      <FlatList
        style={{ width: todoWidth }} 
        data={people}
        renderItem={({item}) => (
          <TodoItem item={item} pressHandler={pressHandler} />
        )
      }
      />
    </View>
  );
}

const todoWidth = '80%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
