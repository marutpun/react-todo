import { generate } from 'shortid';

import { ADD_TODO, DELETE_TODO, MARK_TODO, UNMARK_TODO } from '../action-types';

const initialState = [];

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return state.concat({
				id: generate(),
				title: action.task,
				completed: false,
			});

		case DELETE_TODO:
			return state.filter((todo) => {
				return todo.id !== action.id;
			});

		case MARK_TODO:
			return state.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, completed: true };
				} else {
					return todo;
				}
			});

		case UNMARK_TODO:
			return state.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, completed: false };
				} else {
					return todo;
				}
			});

		default:
			throw new Error();
	}
};

export default todoReducer;
