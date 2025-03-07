import { NavLink, Outlet } from 'react-router-dom';

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
			<div className="container">
				<footer className="py-5">
					<div className="row d-flex">
						<div className="col-6">
							<h5>旅人集所</h5>
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

						<div className="col">
							<ul className="nav d-flex">
								<li className="nav-item mb-2 me-2">
									<a href="#" className="nav-link p-0 text-body-secondary">
										產品分類
									</a>
								</li>
								<li className="nav-item mb-2 me-2">
									<a href="#" className="nav-link p-0 text-body-secondary">
										關於旅人集所
									</a>
								</li>
								<li className="nav-item mb-2 me-2">
									<a href="#" className="nav-link p-0 text-body-secondary">
										售後服務
									</a>
								</li>
							</ul>
						</div>

						{/* <div className="col-6 col-md-2 mb-3">
							<h5>Section</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0 text-body-secondary">
										Home
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0 text-body-secondary">
										Features
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0 text-body-secondary">
										Pricing
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0 text-body-secondary">
										FAQs
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0 text-body-secondary">
										About
									</a>
								</li>
							</ul>
						</div> */}

						{/* <div className="col-md-5 offset-md-1 mb-3">
							<form>
								<h5>Subscribe to our newsletter</h5>
								<p>Monthly digest of what's new and exciting from us.</p>
								<div className="d-flex flex-column flex-sm-row w-100 gap-2">
									<label for="newsletter1" className="visually-hidden">
										Email address
									</label>
									<input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
									<button className="btn btn-primary" type="button">
										Subscribe
									</button>
								</div>
							</form>
						</div> */}
						<div className="col">
							<ul className="list-unstyled d-flex">
								<li className="ms-3">
									<a className="link-body-emphasis" href="#">
										<i className="bi bi-twitter"></i>
									</a>
								</li>
								<li className="ms-3">
									<a className="link-body-emphasis" href="#">
										<i className="bi bi-facebook"></i>
									</a>
								</li>
								<li className="ms-3">
									<a className="link-body-emphasis" href="#">
										<i className="bi bi-line"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="d-flex flex-column flex-sm-row justify-content-center py-1 my-4 ">
						<p>&copy; Copyright {new Date().getFullYear()} 旅人集所 All Rights Reserved</p>
						{/* <ul className="list-unstyled d-flex">
							<li className="ms-3">
								<a className="link-body-emphasis" href="#">
									<i className="bi bi-twitter"></i>
								</a>
							</li>
							<li className="ms-3">
								<a className="link-body-emphasis" href="#">
									<i className="bi bi-facebook"></i>
								</a>
							</li>
							<li className="ms-3">
								<a className="link-body-emphasis" href="#">
									<i className="bi bi-line"></i>
								</a>
							</li>
						</ul> */}
					</div>
				</footer>
			</div>
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