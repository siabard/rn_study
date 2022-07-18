import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [...prevTodos, {text, key: Math.random().toString()}];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {
          text: 'Understood',
          onPress: () => console.log('alert closed'),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
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
    </TouchableWithoutFeedback>
  );
};

export default App;
