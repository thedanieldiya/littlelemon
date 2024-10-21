import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { useOutletContext } from "react-router-dom";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useOutletContext: jest.fn(),
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

test("form should be submitted by the user", () => {
	useOutletContext.mockReturnValue({
		availableTimes: ["18:00", "19:00", "20:00"],
		dispatch: jest.fn(),
	});

	const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

	render(<BookingForm />);

	const dateInput = screen.getByLabelText(/date/i);
	const timeSelect = screen.getByLabelText(/time/i);
	const dinerInput = screen.getByLabelText(/number of diners/i);
	const occasionSelect = screen.getByLabelText(/occasion/i);

	fireEvent.change(dateInput, { target: { value: "2024-10-19" } });
	fireEvent.change(timeSelect, { target: { value: "19:00" } });
	fireEvent.change(dinerInput, { target: { value: "2" } });
	fireEvent.change(occasionSelect, { target: { value: "anniversary" } });

	const submitButton = screen.getByText(/submit/i);
	fireEvent.click(submitButton);

	expect(consoleLogSpy).toHaveBeenCalledWith("submitted");

	consoleLogSpy.mockRestore();
});
