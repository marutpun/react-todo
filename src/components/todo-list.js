import React, { useContext } from 'react';
import {
	Checkbox,
	FormGroup,
	FormControlLabel,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	Paper,
	Tooltip,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import TodoContext from '../contexts/todo-context';
import { DELETE_TODO, MARK_TODO, UNMARK_TODO } from '../action-types';

function TodoList() {
	const { todos, dispatchTodos } = useContext(TodoContext);

	const _handleChangeCheckbox = (todo) => {
		dispatchTodos({
			type: todo.completed ? UNMARK_TODO : MARK_TODO,
			id: todo.id,
		});
	};

	const _handleDeleteTask = (todo) => {
		dispatchTodos({ type: DELETE_TODO, id: todo.id });
	};

	return (
		<Paper square component="section">
			<List disablePadding dense>
				{todos.map((todo) => (
					<ListItem key={todo.id}>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox checked={todo.completed} onChange={() => _handleChangeCheckbox(todo)} />
								}
								label={todo.title}
								disabled={todo.completed}
							/>
						</FormGroup>
						<ListItemSecondaryAction>
							<Tooltip title="Supprimer">
								<IconButton aria-label="delete" onClick={() => _handleDeleteTask(todo)}>
									<Delete />
								</IconButton>
							</Tooltip>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</Paper>
	);
}

export default TodoList;
