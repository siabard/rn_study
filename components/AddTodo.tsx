import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});

const AddTodo = ({submitHandler} : {submitHandler: (v: string) => void}) => {
    const [text, setText] = useState('');

    const changeHandler = (v : string) => {
        setText(v);
    };

    return (
        <View>
            <TextInput style={styles.input} placeholder = 'new todo...' onChangeText={changeHandler}></TextInput>
            <Button onPress={() => {submitHandler(text);}} title='add todo' color='coral' />
        </View>
    );
};

export default AddTodo;