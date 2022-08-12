import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default function TodoForm({ addHandler }) {
    const [todo, setTodo] = useState('')

    const pressHandler = () => {
        if (todo.length > 3) {
			addHandler(todo)
            setTodo('')
		} else Alert.alert(
            'OOPS!', 
            'Todo must be > 3 characters long',
            [{ text:'OK', onPress: () => console.log("OK Pressed") }]
        )
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setTodo(val)}
                value={todo}
                placeholder='new todo..'
            />
            <Button color='coral' title='Add Todo' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})