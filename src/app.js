import React, { useMemo, useReducer } from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { TodoForm } from './components/';
import { TodoList } from './components/';
import TodoContext from './contexts/todo-context';
import todoReducer from './reducer/todo-reducer';
import data from './data';

function App() {
	const [todos, dispatchTodos] = useReducer(todoReducer, data);

	const contextValue = useMemo(() => {
		return { todos, dispatchTodos };
	}, [todos, dispatchTodos]);

	const useStyles = makeStyles({
		helper: {
			marginTop: 8,
		},
	});

	const classes = useStyles();

	return (
		<TodoContext.Provider value={contextValue}>
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
		</TodoContext.Provider>
	);
}

export default App;
