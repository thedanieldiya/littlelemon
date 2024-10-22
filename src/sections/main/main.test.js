import { updateTimes, initializeTimes } from "./Main";
import { fetchAPI } from "../../api"; // Import the fetchAPI function

// Mock the fetchAPI function
jest.mock("../../api", () => ({
	fetchAPI: jest.fn(),
}));

test("initializeTimes should return the correct list of available times", () => {
	// Set up the mock implementation of fetchAPI
	const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	fetchAPI.mockReturnValue(mockTimes);

	const actualTimes = initializeTimes();

	expect(actualTimes).toEqual(mockTimes);
	expect(fetchAPI).toHaveBeenCalled(); // Ensure the mock API was called
});

test("updateTimes should return the available times for a given date", () => {
	// Set up the mock implementation for updateTimes
	const mockTimes = ["17:00", "18:00", "19:00"];
	fetchAPI.mockReturnValue(mockTimes);

	const initialState = [];
	const action = { type: "UPDATE_DATE", payload: "2023-10-20" };

	const newState = updateTimes(initialState, action);

	expect(newState).toEqual(mockTimes);
	expect(fetchAPI).toHaveBeenCalledWith("2023-10-20"); // Ensure fetchAPI was called with the correct date
});
