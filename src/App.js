import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./sections/Layout";
import { Home, Nopage, Reservation } from "./pages";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/reservation" element={<Reservation />} />
						<Route path="*" element={<Nopage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
