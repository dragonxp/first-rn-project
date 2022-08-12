import React, { useState } from 'react';
import { FlatList, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todoitem from './components/Todoitem';

export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play on the switch', key: '3' }
	]);

	const deleteHandler = (key) => {
		setTodos(prev => prev.filter(todo => todo.key !== key))
	}

	const addHandler = (todo) => {
		setTodos(prev => [{ text: todo, key: Math.random().toString() }, ...prev])
	}

	return (
		<TouchableWithoutFeedback onPress={ () => {
			Keyboard.dismiss()
			console.log('dismiss keyboard')
		}}>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<TodoForm addHandler={addHandler} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<Todoitem item={item} deleteHandler={deleteHandler} />
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		flex: 1,
		padding: 40,
	},
	list: {
		flex: 1,
		marginTop: 20,
	},
});
