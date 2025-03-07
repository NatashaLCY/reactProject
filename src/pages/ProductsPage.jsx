import { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
export default function ProductsPage() {
	const [products, setProducts]=useState([]);

	useEffect(()=>{
		const getProducts = async()=>{
			try {
				const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/products`);
				console.log("res:", res.data.products);
				setProducts(res.data.products);
			} catch (error) {
				console.log('error:', error);
				alert('取得產品失敗')
			}
		}
		getProducts();
	},[])
	return (
		<>
			<div className="container">
				<h1>產品分類</h1>
				<div className="d-flex flex-row">
					<div className="productMenu w-25">
						<div className="accordion" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										新品上架
									</button>
								</h2>
								<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									<div className="accordion-body">收納神器</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingTwo">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										鎮店之寶
									</button>
								</h2>
								<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
									<div className="accordion-body">...</div>
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
										<span>所有新品</span>
										<span className="p-1 HighlightYellow" style={{ color: "#DF5038" }}>
											全面85折
										</span>
									</div>
									<div className="accordion-body d-flex justify-content-between align-items-center">
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
									<div className="accordion-body">...</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFive">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										便攜裝備
									</button>
								</h2>
								<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
									<div className="accordion-body">...</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingSix">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
										環保再生專區
									</button>
								</h2>
								<div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
									<div className="accordion-body">...</div>
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
								<p>共 5 項產品</p>
								<hr style={{ width: "90%", margin: "0 0 20px 20px" }} />
								{products.map((product) => (
									<div className="card col-4 ms-3 mb-5 px-0" key={product.id} style={{ width: "15rem" }}>
										<img src={product.imageUrl} className="card-img-top" alt={product.title} />
										<div className="card-body">
											<p className="fs-5 text-primary">{product.title}</p>
											<p className="card-text text-dark">{product.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
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
