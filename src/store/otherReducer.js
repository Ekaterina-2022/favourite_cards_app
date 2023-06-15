const defaultState = {
	likes: [],
};

export const likesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_USER":
			return { ...state, likes: state.likes + action.playload };
		case "DELETE_USER":
			return { ...state, likes: state.likes - action.playload };
		default:
			return state;
	}
};
