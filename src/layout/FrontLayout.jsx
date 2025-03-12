import { NavLink, Outlet } from 'react-router-dom';
import LogoLB from '../assets/img/logo_LB.png'

const routes = [
	{ path: "/", name: "首頁" },
	{ path: "/products", name: "產品分類" },
	{ path: "/about", name: "關於旅人集所" },
	{ path: "/service", name: "售後服務" },
	{ path: "/account", name: "登入/註冊" },
	{ path: "/cart", name: "購物車" },
];

export default function FrontLayout() {
    return (
		<>
			<div className="container">
				<nav className="navbar navbar-expand-lg ">
					<div className="container d-flex justify-content-between">
						<div>
							<a className="navbar-brand" href="#">
								logo
							</a>
						</div>
						<div>
							<form className="d-flex" role="search">
								<input className="form-control me-2" type="search" placeholder="多項商品熱賣中|" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">
									Search
								</button>
							</form>
						</div>
						<div>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									{routes.map((route) => (
										<li className="nav-item" key={route.path}>
											<NavLink className="nav-link" aria-current="page" to={route.path}>
												{route.name}
											</NavLink>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<Outlet />
			<footer className="footer bg-primary_200">
				<div className="container py-8">
						<div className="row d-flex justify-content-between">
							<div className="col-12 col-md-6 text-center text-md-start">
								<img className="mb-4" src={LogoLB} alt="旅人集所" />
								{/* <h4 className="text-primary">旅人集所</h4> */}
								<ul className="nav flex-column">
									<li className="nav-item mb-2 fs-6">
										<a href="#" className="nav-link p-0 text-body-secondary ">
											旅人集所股份有限公司：100 台北市中正區重慶南路二段122號
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-body-secondary">
											統一編號：77776666
										</a>
									</li>
								</ul>
							</div>

							<div className="col-12 col-md-4">
								<ul className="nav d-flex justify-content-center">
									<li className="nav-item px-3 px-12">
										<a href="#" className="nav-link p-0 text-primary">
											產品分類
										</a>
									</li>
									<li className="nav-item px-3 px-12">
										<a href="#" className="nav-link p-0 text-primary">
											關於旅人集所
										</a>
									</li>
									<li className="nav-item px-3 px-12">
										<a href="#" className="nav-link p-0 text-primary">
											售後服務
										</a>
									</li>
								</ul>
							</div>

							<div className="col-12 col-md-2">
								<div className="d-flex justify-content-center justify-content-md-end">
									<div>
										<p className="fs-4 text-primary">Follow Us</p>
										<ul className="list-unstyled d-flex">
											<li>
												<a className="link-body-emphasis" href="#">
													<i className="bi bi-facebook text-primary h2"></i>
												</a>
											</li>
											<li className="mx-3">
												<a className="link-body-emphasis" href="#">
													<i className="bi bi-instagram text-primary h2"></i>
												</a>
											</li>
											<li>
												<a className="link-body-emphasis" href="#">
													<i className="bi bi-line text-primary h2"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="d-flex flex-column flex-sm-row justify-content-center mt-md-8 mt-5 text-primary">
							<p className='mb-0'>&copy; Copyright {new Date().getFullYear()} 旅人集所 All Rights Reserved</p>
						</div>
				</div>
			</footer>
			{/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
				<div className="container">
					<ul className="navbar-nav flex-row gap-5 fs-5">
						{routes.map((route) => (
							<li className="nav-item" key={route.path}>
								<NavLink className="nav-link" aria-current="page" to={route.path}>
									{route.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav> */}
		</>
	);
}