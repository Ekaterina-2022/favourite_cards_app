const defaultState = {
	users: [],
};

const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";
const ADD_ALL_USERS = "ADD_ALL_USERS";

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_USERS:
			return {
				...state,
				users: [...state.users, { ...action.playload }],
			};
		case ADD_USER:
			return { ...state, users: [...state.users, action.playload] };
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(
					(user) => user.id !== action.playload
				),
			};
		default:
			return state;
	}
};

export const addUserAction = (playload) => ({ type: ADD_USER, playload });
export const deleteUserAction = (playload) => ({ type: DELETE_USER, playload });
export const addAllUserAction = (playload) => ({
	type: ADD_ALL_USERS,
	playload,
});
