import React, { useReducer, useEffect } from "react";
import "./main.css";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../api";

const initializeTimes = () => {
	const today = new Date();
	return fetchAPI(today);
};

const updateTimes = (state, action) => {
	if (action.type === "UPDATE_DATE") {
		return fetchAPI(action.payload);
	}
	return state;
};

const Main = () => {
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);
	const navigate = useNavigate(); // useNavigate hook

	const submitForm = (formData) => {
		const isSubmitted = submitAPI(formData);
		if (isSubmitted) {
			navigate("/confirm"); // Navigate to the confirmation page
		} else {
			console.error("Form submission failed");
		}
	};

	useEffect(() => {
		const today = new Date();
		dispatch({ type: "UPDATE_DATE", payload: today });
	}, []);

	return (
		<main aria-label="On Click">
			<Outlet context={{ availableTimes, dispatch, submitForm }} />
		</main>
	);
};

export default Main;
export { updateTimes, initializeTimes };
