import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./bookingForm.css";

const BookingForm = () => {
	const { availableTimes, dispatch } = useOutletContext();
	const [occasion, setOccasion] = useState("");
	const [time, setTime] = useState("");
	const [diner, setDiner] = useState("");
	const [date, setDate] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (occasion === "" || time === "" || diner === "" || date === "") {
			console.log("not submitted");
		} else {
			console.log("submitted");
		}
	};

	const handleDateChange = (e) => {
		const selectedDate = e.target.value;
		setDate(selectedDate);
		dispatch({ type: "update_times", payload: selectedDate });
	};

	return (
		<div className="rForm">
			<section className="section">
				<h2 className="sub__title">Make a reservation</h2>
				<form action="">
					<p className="card__title">Reservation Details</p>
					<div className="reservation__details">
						<div className="select__container">
							<label htmlFor="res-date" className="paragraph__text">
								Date
							</label>
							<div className="select">
								<label htmlFor="res-date">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32px"
										height="32px"
										viewBox="0 0 24 24"
									>
										<path
											fill="var(--green)"
											d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
										></path>
									</svg>
								</label>
								<input
									type="date"
									name="res-date"
									id="res-date"
									value={date}
									onChange={handleDateChange}
									className="highlight__text"
								/>
							</div>
						</div>
						<div className="select__container">
							<label htmlFor="res-time" className="paragraph__text">
								Time
							</label>
							<div className="select">
								<label htmlFor="res-time">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32px"
										height="32px"
										viewBox="0 0 24 24"
									>
										<g
											fill="none"
											stroke="var(--green)"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
										>
											<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></path>
											<path d="M12 7v5l3 3"></path>
										</g>
									</svg>
								</label>
								<select
									name="time"
									id="res-time"
									value={time}
									onChange={(e) => setTime(e.target.value)}
									className="highlight__text"
								>
									<option value=""></option>
									{availableTimes.map((time) => (
										<option key={time} value={time}>
											{time}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="select__container">
							<label htmlFor="guests" className="paragraph__text">
								Number of diners
							</label>
							<div className="select highlight__text">
								<label htmlFor="guests">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32px"
										height="32px"
										viewBox="0 0 16 16"
									>
										<path
											fill="var(--green)"
											d="M4 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M5.5 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-10 6.5A1.5 1.5 0 0 1 3 9h5a1.5 1.5 0 0 1 1.5 1.5v.112a1 1 0 0 1-.01.137a2.85 2.85 0 0 1-.524 1.342C8.419 12.846 7.379 13.5 5.5 13.5s-2.918-.654-3.467-1.409a2.85 2.85 0 0 1-.523-1.342a2 2 0 0 1-.01-.137zm1 .09v.007l.004.049a1.85 1.85 0 0 0 .338.857c.326.448 1.036.997 2.658.997s2.332-.549 2.658-.997a1.85 1.85 0 0 0 .338-.857l.004-.05V10.5A.5.5 0 0 0 8 10H3a.5.5 0 0 0-.5.5zm9 1.91c-.588 0-1.07-.09-1.46-.238a4 4 0 0 0 .361-.932c.268.101.624.17 1.099.17c1.119 0 1.578-.382 1.78-.666a1.2 1.2 0 0 0 .218-.56l.002-.028a.25.25 0 0 0-.25-.246h-2.8A2.5 2.5 0 0 0 10 9h3.25c.69 0 1.25.56 1.25 1.25v.017a1 1 0 0 1-.008.109a2.2 2.2 0 0 1-.398 1.04c-.422.591-1.213 1.084-2.594 1.084"
										></path>
									</svg>
								</label>
								<input
									type="number"
									name="guests"
									id="guests"
									placeholder="1"
									min="1"
									max="10"
									value={diner}
									onChange={(e) => setDiner(e.target.value)}
									className="highlight__text"
								/>
							</div>
						</div>
						<div className="select__container">
							<label htmlFor="occasion" className="paragraph__text">
								Occasion
							</label>
							<div className="select">
								<label htmlFor="occasion">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32px"
										height="32px"
										viewBox="0 0 256 256"
									>
										<path
											fill="var(--green)"
											d="m213.93 213.94l-17.65 4.73l-10.42-38.89a40.06 40.06 0 0 0 20.77-46.14c-12.6-47-38.78-88.22-39.89-89.95a8 8 0 0 0-8.68-3.45l-21.86 5.47c0-8.25-.18-13.43-.21-14.08a8 8 0 0 0-6.05-7.39l-32-8a8 8 0 0 0-8.68 3.45c-1.11 1.73-27.29 42.93-39.89 90a40.06 40.06 0 0 0 20.77 46.14l-10.42 38.84l-17.65-4.73a8 8 0 0 0-4.14 15.46l48 12.86a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 2.07-15.73l-14.9-4l10.42-38.89c.81.05 1.61.08 2.41.08a40.12 40.12 0 0 0 37-24.88c1.18 6.37 2.6 12.82 4.31 19.22A40.08 40.08 0 0 0 168 184c.8 0 1.6 0 2.41-.08l10.42 38.89l-14.9 4a8 8 0 0 0 2.07 15.72a8.2 8.2 0 0 0 2.07-.27l48-12.86a8 8 0 0 0-4.14-15.46M156.22 57.19c2.78 4.7 7.23 12.54 12.2 22.46L136 87.77c-.42-10-.38-18.25-.25-23.79c0-.56.05-1.12.08-1.68Zm-56.44-24l20.37 5.09c.06 4.28 0 10.67-.21 18.47c-.06 1.21-.16 3.19-.23 5.84c0 1-.1 2-.16 3l-32.86-8.16C92 46.67 96.84 38.16 99.78 33.19m11.39 93.09a24 24 0 0 1-46.34-12.5a291 291 0 0 1 15-41.59l38.58 9.64a314 314 0 0 1-7.24 44.45m33.64 23.92A274 274 0 0 1 137 104l38.41-9.6a293 293 0 0 1 15.75 43.39a24 24 0 1 1-46.36 12.42Zm40-106.62a8 8 0 0 1 3.58-10.74l16-8a8 8 0 1 1 7.16 14.32l-16 8a8 8 0 0 1-10.74-3.58M232 72a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M32.84 20.42a8 8 0 0 1 10.74-3.58l16 8a8 8 0 0 1-7.16 14.32l-16-8a8 8 0 0 1-3.58-10.74M40 72H24a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"
										></path>
									</svg>
								</label>
								<select
									name="occasion"
									id="occasion"
									value={occasion}
									onChange={(e) => setOccasion(e.target.value)}
									className="highlight__text"
								>
									<option value=""></option>
									<option value="birthday">Birthday</option>
									<option value="engagement">Engagement</option>
									<option value="anniversary">Anniversary</option>
								</select>
							</div>
						</div>
					</div>
					<button
						type="submit"
						className="button button__large highlight__text"
						onClick={handleFormSubmit}
					>
						Submit
					</button>
				</form>
			</section>
		</div>
	);
};

export default BookingForm;
