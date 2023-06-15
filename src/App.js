import "./App.css";
//import {  } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
	addUserAction,
	deleteUserAction,
	addAllUserAction,
} from "./store/UserReducer";
import { fetchUsers } from "./async_action/users";
import { UserCard } from "./components/user_card";

function App() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);
	//console.log("added" + users.id);
	const addUser = (name) => {
		const user = {
			name,
			id: Date.now(),
		};
		dispatch(addUserAction(user));
	};
	const deleteUser = (id) => {
		dispatch(deleteUserAction(id));
	};

	return (
		<div
			className="App"
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<button onClick={() => addUser(prompt())}>Add user</button>
			<button onClick={() => deleteUser()}>delete user</button>
			<button onClick={() => dispatch(fetchUsers())}>
				add stored users
			</button>
			{users.length > 0 ? (
				<div>
					{users.map((user, key) => (
						<UserCard
							key={user.id}
							id={user.id}
							username={user.username}
							imgUrl={user.avatar}
							deleteUser={deleteUser}
						/>
					))}
				</div>
			) : (
				<p>urers not found</p>
			)}
		</div>
	);
}

export default App;
