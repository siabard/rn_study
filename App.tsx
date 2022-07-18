import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'ReactNative', key: '1'},
    {text: 'Form', key: '2'},
    {text: 'Rust', key: '3'},
  ]);

  const pressHandler = (val: string) => {
    setTodos(prevState => {
      return prevState.filter(t => t.key != val);
    });
  };

  const submitHandler = (text: string) => {
    setTodos(prevTodos => {
      return [...prevTodos, {text, key: Math.random().toString()}];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <AddTodo submitHandler={submitHandler} />
          <FlatList
            data={todos}
            renderItem={({item}) => {
              return <TodoItem item={item} pressHandler={pressHandler} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
