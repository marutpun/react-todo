import React, { useContext, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ADD_TODO } from '../action-types';
import { TodoContextDispatch } from '../contexts/todo-context';

const useStyles = makeStyles({
	btn: {
		marginTop: 8,
		marginBottom: 8,
	},
});

function TodoForm() {
	const [input, setInput] = useState('');
	const dispatchTodos = useContext(TodoContextDispatch);

	const classes = useStyles();

	const _handleChange = (event) => {
		const {
			target: { value },
		} = event;
		const upperCaseText = value.charAt(0).toUpperCase() + value.slice(1);
		setInput(upperCaseText);
	};

	const _handleSubmit = (event) => {
		event.preventDefault();
		if (input) {
			dispatchTodos({ type: ADD_TODO, task: input });
		}
		setInput('');
	};

	return (
		<form onSubmit={_handleSubmit}>
			<FormControl required fullWidth>
				<InputLabel htmlFor="inputTask">Créer une nouvelle tâche</InputLabel>
				<Input id="inputTask" value={input} onChange={_handleChange} />
				<Button
					type="submit"
					variant="contained"
					color="primary"
					disableElevation
					disableRipple
					classes={{
						root: classes.btn,
					}}
				>
					Ajouter
				</Button>
			</FormControl>
		</form>
	);
}

export default TodoForm;
