import { useEffect, useState } from "react";
import axios from "axios";
// import ReactLoading from "react-loading";
// import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function AccountPage() {
	const [isAuth, setIsAuth] = useState(false);
	// const [tempProduct, setTempProduct] = useState({});
	const [products, setProducts] = useState([]);
	const [account, setAccount] = useState({
		username: "nat1563@hotmail.com",
		password: "Nat2024API",
	});
	const handleInputChange = (e) => {
		const { value, name } = e.target;
		setAccount({
			...account,
			[name]: value,
		});
	};
	const handleLogin = (e) => {
		e.preventDefault();
		axios
			.post(`${BASE_URL}/v2/admin/signin`, account)
			.then((res) => {
				const { token, expired } = res.data;
				console.log(token, expired);
				document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
				axios.defaults.headers.common["Authorization"] = token;
				axios
					.get(`${BASE_URL}/v2/api/${API_PATH}/admin/products`)
					.then((res) => {
						setProducts(res.data.products);
					})
					.catch((err) => {
						console.log(err);
					});
				setIsAuth(true);
			})
			.catch((err) => {
				alert("登入失敗");
			});
	};
	const checkUserLogin = async () => {
		try {
			await axios.post(`${BASE_URL}/v2/api/user/check`);
			alert("使用者已登入");
		} catch {
			console.log(err);
		}
	};

	return (
		<>
			<button onClick={checkUserLogin} type="button" className="btn btn-success my-1">
				檢查使用者是否登入
			</button>
			<div className="d-flex flex-column justify-content-center align-items-center vh-100">
				{/* <Link to="/account">回到登入</Link> */}
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
				<p className="mt-5 mb-3 text-muted">&copy; {new Date().getFullYear()}</p>
			</div>
		</>
	);
}
