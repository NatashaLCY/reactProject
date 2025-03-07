import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function App() {

		
	return (
		<>
			{/* {isAuth ? ( */}
			{/* ) : (
				<div className="d-flex flex-column justify-content-center align-items-center vh-100">
					<h1 className="mb-5">請先登入</h1>
					<form onSubmit={handleLogin} className="d-flex flex-column gap-3">
						<div className="form-floating mb-3">
							<input name="username" value={account.username} onChange={handleInputChange} type="email" className="form-control" id="username" placeholder="name@example.com" />
							<label htmlFor="username">Email address</label>
						</div>
						<div className="form-floating">
							<input name="password" value={account.password} onChange={handleInputChange} type="password" className="form-control" id="password" placeholder="Password" />
							<label htmlFor="password">Password</label>
						</div>
						<button className="btn btn-primary">登入</button>
					</form>
					<p className="mt-5 mb-3 text-muted">&copy; 2025</p>
				</div>
			)} */}
		</>
	);
}

export default App;
