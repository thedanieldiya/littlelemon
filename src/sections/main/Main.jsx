import React, { useReducer } from "react";
import "./main.css";
import { Outlet } from "react-router-dom";

const initializeTimes = () => {
	return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
	return initializeTimes();
};

const Main = () => {
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

	return (
		<main>
			<Outlet context={{ availableTimes, dispatch }} />
		</main>
	);
};

export default Main;
export { updateTimes, initializeTimes };
