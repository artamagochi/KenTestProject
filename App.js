import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from './assets/styles/styles.js';
import Header from './assets/components/header';
import TodoItem from './assets/components/todoItem';
import addButton from './assets/components/addButton';


export default function App() {

  const [todos, setTodos] = useState([
    {text: 'fisrt', key: '1'},
    {text: 'second', key: '2'},
    {text: 'thrid', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <View style = {styles.container}>
      <Header />
      <View style={styles.content}>
        {/*to form*/}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}
