import { useState, useEffect } from "react";
import axios from 'axios';
import { Carousel } from 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
// import { AuthProvider } from "./context/AuthContext";
// import { BrowserRouter as Route, Router, Routes, Navigate } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
// import BackEndPage from "./pages/BackEndPage";
// import LoginPage from "./pages/LoginPage";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap" rel="stylesheet"></link>

function App() {

		
	return (
		<></>

			// <AuthProvider>
			// 	<Router>
			// 		<Routes>
			// 			<Route path="/login" element={<LoginPage />} />
			// 			<Route path="/backend" element={<PrivateRoute component={BackEndPage} />} />
			// 			<Route path="/" element={<Navigate to="/login" />} />
			// 		</Routes>
			// 	</Router>
			// </AuthProvider>

	);
}

export default App;
