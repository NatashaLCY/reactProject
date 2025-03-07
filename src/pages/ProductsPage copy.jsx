import { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
export default function ProductsPage() {
//     const [products, setProducts] = useState([]);
//     const [isScreenLoading, setIsScreenLoading] = useState(false);
// 	const [isLoading, setIsLoading] = useState(false);
// 	useEffect(() => {
// 		const getProducts = async () => {
// 			setIsScreenLoading(true);
// 			try {
// 				const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/products`);
// 				setProducts(res.data.products);
// 			} catch (error) {
// 				alert("取得產品失敗");
// 			} finally {
// 				setIsScreenLoading(false);
// 			}
// 		};
// 		getProducts();
// 		// getCart();
// 	}, []);
// 	const addCartItem = async (product_id, qty) => {
// 		setIsLoading(true);
// 		try {
// 			await axios.post(`${BASE_URL}/v2/api/${API_PATH}/cart`, {
// 				data: {
// 					product_id,
// 					qty: Number(qty),
// 				},
// 			});
// 			// getCart();
// 		} catch (error) {
// 			alert("加入購物車失敗");
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};

	const [isAuth, setIsAuth] = useState(false);
	const [tempProduct, setTempProduct] = useState({});
	const [products, setProducts] = useState([]);
	const [account, setAccount] = useState({
		username: "example@test.com",
		password: "example",
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
		// (import.meta.env.VITE_BASE_URL);
		// (import.meta.env.VITE_API_PATH);
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
			<div className="container">
				<h1>product</h1>
				{isAuth ? (
					<div className="container py-5">
						<div className="row">
							<div className="col-6">
								<h2>產品列表</h2>
								<table className="table">
									<thead>
										<tr>
											<th scope="col">產品名稱</th>
											<th scope="col">原價</th>
											<th scope="col">售價</th>
											<th scope="col">是否啟用</th>
											<th scope="col">查看細節</th>
										</tr>
									</thead>
									<tbody>
										{products.map((product) => (
											<tr key={product.id}>
												<th scope="row">{product.title}</th>
												<td>{product.origin_price}</td>
												<td>{product.price}</td>
												<td>{product.is_enabled}</td>
												<td>
													<button onClick={() => setTempProduct(product)} className="btn btn-primary" type="button">
														查看細節
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
								<button onClick={checkUserLogin} type="button" className="btn btn-success my-1">
									檢查使用者是否登入
								</button>
							</div>
							<div className="col-6">
								<h2>單一產品細節</h2>
								{tempProduct.title ? (
									<div className="card">
										<img src={tempProduct.imageUrl} className="card-img-top img-fluid" alt={tempProduct.title} />
										<div className="card-body">
											<h5 className="card-title">
												{tempProduct.title}
												<span className="badge text-bg-primary">{tempProduct.category}</span>
											</h5>
											<p className="card-text">商品描述：{tempProduct.description}</p>
											<p className="card-text">商品內容：{tempProduct.content}</p>
											<p className="card-text">
												<del>{tempProduct.origin_price} 元</del> / {tempProduct.price} 元
											</p>
											<h5 className="card-title">更多圖片：</h5>
											{tempProduct.imagesUrl?.map((image) => image && <img key={image} src={image} className="img-fluid" />)}
										</div>
									</div>
								) : (
									<p>請選擇一個商品查看</p>
								)}
							</div>
						</div>
					</div>
				) : (
					<div className="d-flex flex-column justify-content-center align-items-center vh-100">
						<Link to="/account">回到登入</Link>
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
						<p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
					</div>
				)}

				{/* <table className="table align-middle">
					<thead>
						<tr>
							<th>圖片</th>
							<th>商品名稱</th>
							<th>價格</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product.id}>
								<td style={{ width: "200px" }}>
									<img className="img-fluid" src={product.imageUrl} alt={product.title} />
								</td>
								<td>{product.title}</td>
								<td>
									<del className="h6">原價 {product.origin_price} 元</del>
									<div className="h5">特價 {product.origin_price}元</div>
								</td>
								<td>
									<div className="btn-group btn-group-sm"> */}
				{/* onClick={() => handleSeeMore(product)} */}
				{/* <Link to={`/products/${product.id}`} className="btn btn-outline-secondary">
											查看更多
										</Link>
										<button disabled={isLoading} onClick={() => addCartItem(product.id, 1)} type="button" className="btn btn-outline-danger d-flex align-items-center gap-2">
											加到購物車
											{isLoading && <ReactLoading type={"spin"} color={"#000"} height={"1.5rem"} width={"1.5rem"} />}
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table> */}
			</div>
			{/* {isScreenLoading && (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{
						position: "fixed",
						inset: 0,
						backgroundColor: "rgba(255,255,255,0.3)",
						zIndex: 999,
					}}
				>
					<ReactLoading type="spin" color="black" width="4rem" height="4rem" />
				</div>
			)} */}
		</>
	);
}
