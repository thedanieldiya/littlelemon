import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { useOutletContext } from "react-router-dom";
import { submitAPI } from "../../../api";

// Mock the useOutletContext and submitAPI
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useOutletContext: jest.fn(),
}));

jest.mock("../../../api", () => ({
	submitAPI: jest.fn(),
}));

test('should render the static text "Make a reservation"', () => {
	useOutletContext.mockReturnValue({
		availableTimes: ["18:00", "19:00", "20:00"],
		dispatch: jest.fn(),
	});

	render(<BookingForm />);

	const reservationHeading = screen.getByText(/make a reservation/i);
	expect(reservationHeading).toBeInTheDocument();
});

// test("form should be submitted by the user", () => {
// 	useOutletContext.mockReturnValue({
// 		availableTimes: ["18:00", "19:00", "20:00"],
// 		dispatch: jest.fn(),
// 	});

// 	// Mock the submitAPI to simulate a successful submission
// 	submitAPI.mockReturnValue(true);

// 	render(<BookingForm />);

// 	const dateInput = screen.getByLabelText(/date/i);
// 	const timeSelect = screen.getByLabelText(/time/i);
// 	const dinerInput = screen.getByLabelText(/number of guests/i);
// 	const occasionSelect = screen.getByLabelText(/occasion/i);

// 	// Simulate user filling out the form
// 	fireEvent.change(dateInput, { target: { value: "2024-10-19" } });
// 	fireEvent.change(dinerInput, { target: { value: "2" } });
// 	fireEvent.change(timeSelect, { target: { value: "19:00" } });
// 	fireEvent.change(occasionSelect, { target: { value: "anniversary" } });

// 	const submitButton = screen.getByRole("button", { name: /submit/i });
// 	fireEvent.click(submitButton);

// 	// Ensure the submitAPI was called with the correct data
// 	expect(submitAPI).toHaveBeenCalledWith({
// 		date: "2024-10-19",
// 		guests: "2",
// 		time: "19:00",
// 		occasion: "anniversary",
// 	});

// 	// Cleanup after test
// 	submitAPI.mockRestore();
// });
