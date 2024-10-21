import React from "react";
import "./reservation.css";
import ReservationHero from "./hero/ReservationHero";
import BookingForm from "./form/BookingForm";

const Reservation = () => {
	return (
		<>
			<ReservationHero />
			<BookingForm />
		</>
	);
};

export default Reservation;
