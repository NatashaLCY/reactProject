import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layout/FrontLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductsDetailPage from "../pages/ProductDetailPage";
import AboutPage from "../pages/AboutPage";
import SalesService from "../pages/SalesServicePage";
import AccountPage from "../pages/AccountPage";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";

const router = createHashRouter([
	{
		path: "/",
		element: <FrontLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "products",
				element: <ProductsPage />,
			},
			{
				path: "products/:id",
				element: <ProductsDetailPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "Service",
				element: <SalesService />,
			},
			{
				path: "account",
				element: <AccountPage/>,
			},
			{
				path: "cart", // 參考FrontLayout路由
				element: <CartPage />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
export default router;