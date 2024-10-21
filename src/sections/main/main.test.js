import { updateTimes, initializeTimes } from "./Main";

test("initializeTimes should return the correct list of available times", () => {
	const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	const actualTimes = initializeTimes();

	expect(actualTimes).toEqual(expectedTimes);
});

test("updateTimes should return the same state as provided", () => {
	const initialState = initializeTimes();
	const action = { type: "update_times", payload: "2023-10-20" };

	const newState = updateTimes(initialState, action);

	expect(newState).toEqual(initialState);
});
