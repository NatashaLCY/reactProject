import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
// /v2/api/{api_path}/product/{id}
export default function ProductsDetailPage() {
	const [product, setProduct] = useState({});
	const [qtySelect, setQtySelect] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isScreenLoading, setIsScreenLoading] = useState(false);
    //const params = useParams();//對應index路由的路徑id
    const { id: product_id } = useParams(); 
    // console.log(product_id);
	useEffect(() => {
		const getProduct = async () => {
			setIsScreenLoading(true);
			try {
                // console.log(product_id);
				const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/product/${product_id}`);
				setProduct(res.data.product);
			} catch (error) {
				alert("取得產品失敗");
			} finally {
				setIsScreenLoading(false);
			} 
		};
		getProduct();
		// getCart();
	}, []);
    const addCartItem = async (product_id, qty) => {
        setIsLoading(true);
        try {
            await axios.post(`${BASE_URL}/v2/api/${API_PATH}/cart`, {
                data: {
                    product_id,
                    qty: Number(qty),
                },
            });
            // getCart();
        } catch (error) {
            console.log('error:', error);
            alert("加入購物車失敗");
        } finally {
            setIsLoading(false);
        }
    };

		// 設定大圖的 state，預設顯示第一張圖片
		const [mainImage, setMainImage] = useState("https://media.istockphoto.com/id/1185610086/photo/vacuum-compress-bag-for-clothes-with-small-and-easy-hand-pump-for-expanded-your-space-storage.jpg?s=1024x1024&w=is&k=20&c=9tXpZamEkdqN46foJbNGYrEQF4VdsixI5ibVC5mGBvo=");

		// 當點擊縮圖時，更新大圖
		const changeImage = (imageUrl) => {
			setMainImage(imageUrl);
		};

		const [activeTab, setActiveTab] = useState("nav-home");

		const handleTabClick = (tabName) => {
			setActiveTab(tabName);
		};


	return (
		<>
			<div className="banner">
				<div className="container-fluid gx-0" style={{ height: "50vh" }}>
					<div className="h-100 bg-primary">
						<img
							className="w-100 h-100"
							style={{ objectFit: "cover", objectPosition: "top" }}
							src="https://img.freepik.com/free-photo/flat-lay-composition-different-traveling-elements_23-2148884946.jpg?t=st=1741776427~exp=1741780027~hmac=5f40c33c81d97ef42f5ea9d94796e542e2dd07dbd8ddc5f82eb85200395f7970&w=1380"
							alt="產品詳細頁banner"
						/>
					</div>
				</div>
			</div>
			<div className="container my-8">
				<div className="row">
					<div className="col-6">
						<div className="d-flex flex-column">
							<div className="col mb-3">
								<img id="main-image" src={mainImage} alt="Main Image" className="img-fluid" />
							</div>
							<div className="col">
								<div className="d-flex flex-row">
									<img
										src="https://media.istockphoto.com/id/1185610086/photo/vacuum-compress-bag-for-clothes-with-small-and-easy-hand-pump-for-expanded-your-space-storage.jpg?s=1024x1024&w=is&k=20&c=9tXpZamEkdqN46foJbNGYrEQF4VdsixI5ibVC5mGBvo="
										alt="Thumbnail 1"
										className="img-fluid w-25 me-3"
										onClick={() => changeImage("https://media.istockphoto.com/id/1185610086/photo/vacuum-compress-bag-for-clothes-with-small-and-easy-hand-pump-for-expanded-your-space-storage.jpg?s=1024x1024&w=is&k=20&c=9tXpZamEkdqN46foJbNGYrEQF4VdsixI5ibVC5mGBvo=")}
									/>
									<img
										src="https://media.istockphoto.com/id/1004830588/photo/crossed-belts-on-vacuum-compress-bag-for-clothes.jpg?s=1024x1024&w=is&k=20&c=k2ZWw9rvy8H534Bvm2VH0cJ4bGuFHLI8ufFs9aqR4yo="
										alt="Thumbnail 2"
										className="img-fluid w-25 me-3"
										onClick={() => changeImage("https://media.istockphoto.com/id/1004830588/photo/crossed-belts-on-vacuum-compress-bag-for-clothes.jpg?s=1024x1024&w=is&k=20&c=k2ZWw9rvy8H534Bvm2VH0cJ4bGuFHLI8ufFs9aqR4yo=")}
									/>
									<img
										src="https://media.istockphoto.com/id/1004830604/photo/crossed-belts-on-vacuum-compress-bag.jpg?s=1024x1024&w=is&k=20&c=iWrk4HA5BXe1QrP1Iza3BFfwR8CClrFWwuLE8w_bfF0="
										alt="Thumbnail 3"
										className="img-fluid w-25 me-3"
										onClick={() => changeImage("https://media.istockphoto.com/id/1004830604/photo/crossed-belts-on-vacuum-compress-bag.jpg?s=1024x1024&w=is&k=20&c=iWrk4HA5BXe1QrP1Iza3BFfwR8CClrFWwuLE8w_bfF0=")}
									/>
									<img
										src="https://media.istockphoto.com/id/1004830624/photo/crossed-belts-on-vacuum-compress-bag-for-clothes.jpg?s=1024x1024&w=is&k=20&c=gOKZYOP5Bqhic_7SjvVZ-c4Xu8ReJU5k6fudGqQcCS8="
										alt="Thumbnail 3"
										className="img-fluid w-25"
										onClick={() => changeImage("https://media.istockphoto.com/id/1004830624/photo/crossed-belts-on-vacuum-compress-bag-for-clothes.jpg?s=1024x1024&w=is&k=20&c=gOKZYOP5Bqhic_7SjvVZ-c4Xu8ReJU5k6fudGqQcCS8=")}
									/>
								</div>
							</div>
						</div>
						{/* <img className="img-fluid" src={product.imageUrl} alt={product.title} /> */}
					</div>
					<div className="col-6">
						<div className="d-flex align-items-center gap-2">
							<h2>{product.title}</h2>
							<span className="badge text-bg-success">{product.category}</span>
						</div>
						<p className="mb-3">{product.description}</p>
						<p className="mb-3">{product.content}</p>
						<h5 className="mb-3">NT$ {product.price}</h5>
						<div className="input-group align-items-center w-75">
							<select value={qtySelect} onChange={(e) => setQtySelect(e.target.value)} id="qtySelect" className="form-select">
								{Array.from({ length: 10 }).map((_, index) => (
									<option key={index} value={index + 1}>
										{index + 1}
									</option>
								))}
							</select>
							<button onClick={() => addCartItem(product_id, qtySelect)} type="button" className="btn btn-primary d-flex align-items-center gap-2" disabled={isLoading}>
								加入購物車
								{isLoading && <ReactLoading type={"spin"} color={"#000"} height={"1.5rem"} width={"1.5rem"} />}
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<nav>
						<div className="nav nav-tabs" id="nav-tab" role="tablist">
							<button className={`nav-link ${activeTab === "nav-home" ? "active" : ""}`} id="nav-home-tab" type="button" role="tab" aria-controls="nav-home" aria-selected={activeTab === "nav-home"} onClick={() => handleTabClick("nav-home")}>
								產品說明
							</button>
							<button className={`nav-link ${activeTab === "nav-profile" ? "active" : ""}`} id="nav-profile-tab" type="button" role="tab" aria-controls="nav-profile" aria-selected={activeTab === "nav-profile"} onClick={() => handleTabClick("nav-profile")}>
								注意事項
							</button>
							<button className={`nav-link ${activeTab === "nav-contact" ? "active" : ""}`} id="nav-contact-tab" type="button" role="tab" aria-controls="nav-contact" aria-selected={activeTab === "nav-contact"} onClick={() => handleTabClick("nav-contact")}>
								產品規格
							</button>
						</div>
					</nav>

					<div className="tab-content" id="nav-tabContent">
						<div className={`tab-pane fade ${activeTab === "nav-home" ? "show active" : ""}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">採用特殊防滑板材，貼合襪子和西裝的劃算</li>
								<li className="list-group-item">使用高韌性防壓材料，防止行李中其他物品對衣物造成壓縮損壞</li>
								<li className="list-group-item">配有分隔設計，可同時存放領帶或其他物品配件</li>
								<li className="list-group-item">簡約大氣的外觀，適合差旅場合</li>
							</ul>
						</div>
						<div className={`tab-pane fade ${activeTab === "nav-profile" ? "show active" : ""}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">此產品不適用於高溫環境</li>
								<li className="list-group-item">建議手洗，避免機洗損壞</li>
								<li className="list-group-item">請避免長時間暴露於陽光下</li>
							</ul>
						</div>
						<div className={`tab-pane fade ${activeTab === "nav-contact" ? "show active" : ""}`} id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">材質：防水聚酯纖維</li>
								<li className="list-group-item">尺寸：45cm x 30cm x 10cm</li>
								<li className="list-group-item">顏色：黑色</li>
								<li className="list-group-item">重量：1.2kg</li>
							</ul>
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
