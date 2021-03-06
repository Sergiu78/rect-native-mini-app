
import React, { useState } from 'react';
import { Alert, StyleSheet, View} from 'react-native';

import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {

  const [todoId, setTodoId] = useState(null)
  const [ todos, setTodos ] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    setTodos(prev => [
        ...prev, {
        id: Date.now().toString(),
        title
      }

    ])

    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })
  }

  const removeTodo = (id) => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      'Удаление элемента',
      `Вы действительно хототе удалить "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        { 
          text: 'Удалить', 
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter((el) => el.id !== id))
          }
        }

      ],
      {cancelable: false}
    )
    
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if(todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (<MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />)

  if(todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = ( 
      <TodoScreen 
        onRemove={removeTodo} 
        goBack={() => setTodoId(null)} 
        todo={selectedTodo}
        onSave={updateTodo} />
    )
  }

  return (
    <View>
     <Navbar title='Todo App'/>
     <View style={styles.container}>
        { content }
     </View>
     
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
});
