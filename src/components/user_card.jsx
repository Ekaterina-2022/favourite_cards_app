import React from "react";
import style from "./user_card.css";

export const UserCard = (props) => {
	const { id, imgUrl, username, user, key } = props;

	return (
		<div className="user__container">
			<div className="user__img">
				<img src={imgUrl} alt="user" />
			</div>
			<p>{username}</p>
			<p className="">like</p>
			<button onClick={() => props.deleteUser(id)}>Delete</button>
		</div>
	);
};
