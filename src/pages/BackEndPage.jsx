import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import ProductModal from "../components/ProductModal";
import DeleteProductModal from "../components/DeleteProductModal";
import LoginPage from "./LoginPage";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const defaultModalState = {
	imageUrl: "",
	title: "",
	category: "",
	unit: "",
	origin_price: "",
	price: "",
	description: "",
	content: "",
	is_enabled: 0,
	imagesUrl: [""],
};

export default function BackEndPage() {
	const [products, setProducts] = useState([]);
	const [modalMode, setModalMode] = useState(null);
	const [isProductModalOpen, setIsProductModalOpen] = useState(false);
	const [isDelProductModalOpen, setIsDelProductModalOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
	const getProducts = async (page = 1) => {
		try {
            const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/admin/products?page=${page}`);
            console.log('res', res);
			setProducts(res.data.products);
			setPageInfo(res.data.pagination);
		} catch (error) {
			alert("取得產品失敗");
		}
	};
	useEffect(() => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		if (token) {
			setIsAuth(true); // 如果有 token，就表示已經登入
		};
		getProducts();
	}, []);
	const handleOpenProductModal = (modal, product) => {
		setModalMode(modal);
		switch (modal) {
			case "create":
				setTempProduct(defaultModalState);
				break;
			case "edit":
				setTempProduct(product);
				break;
			default:
				break;
		}
		setIsProductModalOpen(true);
	};
	const [pageInfo, setPageInfo] = useState({});
	const handlePageChange = (page) => {
		getProducts(page);
	};

	// const handleOpenDelProductModal = (mode, product) => {
	// 	setModalMode(mode);
	//     switch (mode) {
	//         case "create":
	//             setTempProduct(defaultModalState);
	//             break;
	//         case "edit":
	//             setTempProduct(product);
	//             break;
	//         default:
	//             break;
	//     }
	//     setIsProductModalOpen(true);
	// };
	const handleOpenDelProductModal = (product) => {
		setTempProduct(product);
		setIsDelProductModalOpen(true);
	};

	const [tempProduct, setTempProduct] = useState(defaultModalState);

	return (
		<>
        {isAuth ? (
            <>
			<div className="container py-5">
				<div className="row">
					<div className="col">
						<div className="d-flex justify-content-between">
							<h2>產品列表</h2>
							<button onClick={() => handleOpenProductModal("create")} type="button" className="btn btn-primary">
								建立新的產品
							</button>
						</div>
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
										<td>{product.is_enabled ? <span className="text-success">啟用</span> : <span>未啟用</span>}</td>
										<td>
											<div className="btn-group">
												<button onClick={() => handleOpenProductModal("edit", product)} type="button" className="btn btn-outline-primary btn-sm">
													編輯
												</button>
												<button onClick={() => handleOpenDelProductModal(product)} type="button" className="btn btn-outline-danger btn-sm">
													刪除
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
			</div>
			<ProductModal isOpen={isProductModalOpen} setIsOpen={setIsProductModalOpen} modalMode={modalMode} tempProduct={tempProduct} getProducts={getProducts} />
			<DeleteProductModal isOpen={isDelProductModalOpen} setIsOpen={setIsDelProductModalOpen} tempProduct={tempProduct} getProducts={getProducts} />
            </>
            ):(
                <LoginPage setIsAuth={setIsAuth} />
            )
        }
		</>
	);
}
