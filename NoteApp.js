import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ShadowPropTypesIOS, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from './components/Task';


const AppScreen = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

  handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true
      })
    )
  }

  handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    )
  }
  return (
      <View style={styles.container}>
        <Text style={{ marginTop: '10%', fontSize: 16, color: 'darkred' }}>Today</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => setValue(value)}
            placeholder={'Note'}
            placeholderTextColor="darkgray"
            value={value}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            todos.map((task) => (
              <Task
                text={task.text}
                key={task.key}
                checked={task.checked}
                setChecked={() => handleChecked(task.key)}
                delete={() => handleDeleteTodo(task.key)}
              />
            ))

          }
        </ScrollView>
      </View>
  )
}
export default AppScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 20,
    flex: 1,
    minHeight: '7%',
    marginTop: '5%',
    fontSize: 25,
    color: 'black',
    paddingLeft: 10
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5
  }
});

