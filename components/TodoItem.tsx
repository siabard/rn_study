import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
  },
});

const TodoItem = ({
  item,
  pressHandler,
}: {
  item: {text: string; key: string};
  pressHandler: (v: string) => void;
}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Icon name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
