import { addAllUserAction } from "../store/UserReducer";

export const fetchUsers = () => {
	return (dispatch) => {
		fetch("https://random-data-api.com/api/v2/users?size=4")
			.then((response) => response.json())

			.then((json) => console.log(json))

			.then((json) => dispatch(addAllUserAction(json)));
	};
};
