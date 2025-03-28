import { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
export default function ProductsPage() {
	const [products, setProducts]=useState([]);
	const [pageInfo, setPageInfo] = useState({});
	const [isScreenLoading, setIsScreenLoading] = useState(false);
	// const [selectedCategory, setSelectedCategory] = useState("C003");
	// const [isLoading, setIsLoading] = useState(false);
	const getAllProducts = async () => {
		setIsScreenLoading(true);
		try {
			const allProducts = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/products/all`);
			console.log("allProducts:", allProducts.data.products);	
			setProducts(allProducts.data.products);
		} catch (error) {
			console.log("error:", error);
			alert("取得產品失敗");
		}
		finally {
			setIsScreenLoading(false);
		}
	}
	const getProducts = async(page=1)=>{
		setIsScreenLoading(true);
		try {
			const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/products?page=${page}`);
			// setProducts(res.data.products);
			setPageInfo(res.data.pagination);
		} catch (error) {
			console.log('error:', error);
			alert('取得產品失敗')
		} finally{
			setIsScreenLoading(false);
		}
	}
	useEffect(()=>{
		getProducts();
		getAllProducts();
	},[])

	const handlePageChange = (page) => {
		getProducts(page);
	};

	// const [filteredProducts, setFilteredProducts] = useState(products);
	// const StorageList = () => {
	// 	const Storage = products.filter((product) => product.category === "收納神器");
	// 	setFilteredProducts(Storage);
	// };

	const [selectedCategory, setSelectedCategory] = useState("收納神器");
	const [filteredProducts, setFilteredProducts] = useState([]);
	useEffect(() => {
		console.log("products:", products);
		const filtered = products.filter((product) => product.category === selectedCategory);
		setFilteredProducts(filtered);
	}, [selectedCategory, products]);

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};


	// const applyDiscount = () => {
	// 	const discounted = products.map((product) => ({
	// 		...product,
	// 		price: product.price * product.discount,
	// 	}));
	// 	setFilteredProducts(discounted);
	// };
	// const applyThresholdDiscount = () => {
	// 	const discounted = products.map((product) => ({
	// 		...product,
	// 		price: product.price >= 1000 ? product.price - 100 : product.price,
	// 	}));
	// 	setFilteredProducts(discounted);
	// };


	return (
		<>
			<div className="banner">
				<div className="container-fluid gx-0" style={{ height: "50vh" }}>
					<div className="h-100 bg-primary">
						<img
							className="w-100 h-100"
							style={{ objectFit: "cover", objectPosition: "top" }}
							src="https://images.unsplash.com/photo-1536584754829-12214d404f32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="產品列表banner"
						/>
					</div>
				</div>
			</div>
			<div className="container py-8">
				<h1>產品分類</h1>
				<div className="d-flex flex-row">
					{/* <div className="productMenu w-25">
						<div className="accordion" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										產品分類
									</button>
								</h2>
								<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										{Object.keys(categories).map((category) => (
											<div key={category} className={`p-2 ${selectedCategory === category ? "fw-bold text-primary" : ""}`} style={{ cursor: "pointer" }} onClick={() => setSelectedCategory(category)}>
												{categories[category]}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="productList w-75">
						<div className="container">
							<div className="row">
								<h6 className="h6">{categories[selectedCategory]}</h6>
								<p>這裡顯示 {categories[selectedCategory]} 的相關產品</p>
							</div>
							<div className="row">
								<p className="mb-8px">共 {filteredProducts.length} 項產品</p>
								<div className="border-top mb-5 px-3"></div>
								{filteredProducts.map((product) => (
									<div className="card col-4 ms-3 mb-5 px-0" key={product.id} style={{ width: "15rem" }}>
										<Link to={`/products/${product.id}`} className="text-decoration-none">
											<img src={product.imageUrl} className="card-img-top" alt={product.title} />
											<div className="card-body d-flex flex-column">
												<p className="fs-5 text-primary-700 mb-8px">{product.title}</p>
												<p className="card-text text-dark mb-12px">{product.description}</p>
												<p className="card-text text-primary-700 mt-auto">NT$ {product.price}</p>
											</div>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div> */}
					<div className="productMenu w-25">
						<div className="accordion" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										新品上架
									</button>
								</h2>
								<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									{/* <div className="accordion-body" onClick={StorageList}> */}
									<div className="accordion-body" onClick={() => handleCategoryChange("收納神器")}>
										收納神器
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingTwo">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										鎮店之寶
									</button>
								</h2>
								<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
									<div className="accordion-body" onClick={() => handleCategoryChange("熱銷排行榜")}>
										熱銷排行榜
									</div>
									<div className="accordion-body" onClick={() => handleCategoryChange("高評價推薦")}>
										高評價推薦
									</div>
									<div className="accordion-body">回購率最高</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingThree">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										限時搶購
									</button>
								</h2>
								<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
									<div className="accordion-body d-flex justify-content-between align-items-center">
										{/* <div className="accordion-body d-flex justify-content-between align-items-center" onClick={applyDiscount}> */}
										<span>所有新品</span>
										<span className="p-1 HighlightYellow" style={{ color: "#DF5038" }}>
											全面85折
										</span>
									</div>
									<div className="accordion-body d-flex justify-content-between align-items-center">
										{/* <div className="accordion-body d-flex justify-content-between align-items-center" onClick={applyThresholdDiscount}> */}
										<span>週年慶</span>
										<span className="p-1 HighlightYellow" style={{ color: "#DF5038" }}>
											滿千折百
										</span>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFour">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
										行李收納
									</button>
								</h2>
								<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
									<div className="accordion-body" onClick={() => handleCategoryChange("真空壓縮袋")}>
										真空壓縮袋
									</div>
									<div className="accordion-body" onClick={() => handleCategoryChange("旅行鞋袋")}>
										旅行鞋袋
									</div>
									<div className="accordion-body" onClick={() => handleCategoryChange("內衣收納袋")}>
										內衣收納袋
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFive">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										便攜裝備
									</button>
								</h2>
								<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
									<div className="accordion-body" onClick={() => handleCategoryChange("折疊背包／手提袋")}>
										折疊背包／手提袋
									</div>
									<div className="accordion-body" onClick={() => handleCategoryChange("旅行頸枕／眼罩／耳塞")}>
										旅行頸枕／眼罩／耳塞
									</div>
									<div className="accordion-body" onClick={() => handleCategoryChange("可折疊水瓶／隨行杯")}>
										可折疊水瓶／隨行杯
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingSix">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
										環保再生專區
									</button>
								</h2>
								<div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
									<div className="accordion-body" onClick={() => handleCategoryChange("可重複使用折疊袋")}>
										可重複使用折疊袋
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="productList w-75">
						<div className="container">
							<div className="row">
								<h6 className="h6">旅人的夥伴 - 收納神器</h6>
								<p>旅行打包太麻煩？收納神器來解救！讓行李箱瞬間變得整齊有序，每件物品各歸其位，旅行準備再也不費力。無論是衣物、鞋子還是零碎小物，都能用這些神器完美收納，享受輕鬆又高效的打包體驗</p>
							</div>
							<div className="row">
								{/* <p className=" mb-8px">共 {products.length} 項產品</p> */}
								<p className=" mb-8px">共 {filteredProducts.length} 項產品</p>
								<div className="border-top mb-5 px-3"></div>
								{/* {products.map((product) => (
									<div className="card col-4 ms-3 mb-5 px-0" key={product.id} style={{ width: "15rem" }}>
										<Link to={`/products/${product.id}`} className="text-decoration-none">
											<img src={product.imageUrl} className="card-img-top" alt={product.title} />
											<div className="card-body d-flex flex-column">
												<p className="fs-5 text-primary-700 mb-8px">{product.title}</p>
												<p className="card-text text-dark mb-12px">{product.description}</p>
												<p className="card-text text-primary-700 mt-auto">NT$ {product.price}</p>
											</div>
										</Link>
									</div>
								))} */}
								{filteredProducts.map((product) => (
									<div className="card col-4 ms-3 mb-5 px-0" key={product.id} style={{ width: "15rem" }}>
										<Link to={`/products/${product.id}`} className="text-decoration-none">
											<img src={product.imageUrl} className="card-img-top" alt={product.title} />
											<div className="card-body d-flex flex-column">
												<p className="fs-5 text-primary-700 mb-8px">{product.title}</p>
												<p className="card-text text-dark mb-12px">{product.description}</p>
												<p className="card-text text-primary-700 mt-auto">NT$ {product.price.toFixed(0)}</p>
											</div>
										</Link>
									</div>
								))}
							</div>
							<Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
						</div>
					</div>
				</div>
			</div>
			{isScreenLoading && (
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
			)}
		</>
	);
}
