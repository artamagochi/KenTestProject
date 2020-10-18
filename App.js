import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from './assets/styles/styles.js';
import Header from './assets/components/header';
import TodoItem from './assets/components/todoItem';
import AddButton from './assets/components/addButton';


export default function App() {

  const [counter, updateCount] = useState(1)

  const [todos, setTodos] = useState([])

  const [textInputValue, setTextInputValue] = useState('');

  const pressHandler = (key) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  function addElement(action){
    updateCount((counter) => counter + 1)
    setTodos(todos.concat({text: action, key: counter.toString()}))
  }

  return (
    <View style = {styles.container}>
      <Header />
      <View style={styles.content}>
        <AddButton
          value={textInputValue}
          changeHandler={setTextInputValue}
          buttonHandler = {addElement}
        />
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
