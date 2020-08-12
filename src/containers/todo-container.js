import React, { useReducer } from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TodoForm, TodoList } from '../components/';
import { TodoContextState, TodoContextDispatch } from '../contexts/todo-context';
import todoReducer from '../reducer/todo-reducer';
import data from '../data/';

function TodoContainer() {
	const [todos, dispatchTodos] = useReducer(todoReducer, data);

	const useStyles = makeStyles({
		helper: {
			marginTop: 8,
		},
	});

	const classes = useStyles();

	return (
		<TodoContextDispatch.Provider value={dispatchTodos}>
			<TodoContextState.Provider value={todos}>
				<Container fixed>
					<Typography variant="h4" component="h1">
						La liste de tâches
					</Typography>
					<TodoForm />
					<TodoList />
					<Typography
						variant="caption"
						component="p"
						align="center"
						classes={{
							root: classes.helper,
						}}
					>
						Créer une nouvelle tâche au lieu modifier des tâches.
					</Typography>
				</Container>
			</TodoContextState.Provider>
		</TodoContextDispatch.Provider>
	);
}
export default TodoContainer;
