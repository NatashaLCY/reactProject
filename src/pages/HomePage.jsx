export default function HomePage() {
	return (
		<div className="container-fluid gx-0">
			<div className="news">
				<div className="row text-center pt-3 HighlightYellow gx-0">
					<p>🎉 週年慶！滿千送百，精美小禮加碼送～ 🎉</p>
				</div>
			</div>
			<div id="carouselExample" className="carousel slide gx-0">
				<div className="carousel-inner">
					<div className="carousel-item active position-relative">
						<img src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 img-blend" alt="slide01" />
						<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay"></div>
						<div className="bannerText">
							<div>
								<h1>專注旅行便利，讓出行更無憂</h1>
								<button className="btn btn-primary rounded-0">立即選購</button>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src="https://images.unsplash.com/flagged/photo-1568041193043-e86f15540986?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="slide02" />
						<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay"></div>
					</div>
					<div className="carousel-item">
						<img src="https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="slide03" />
						<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay"></div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="collectionHighlights py-8">
				<div className="container">
					<div className="row">
						<h3 className="text-center pb-8 special-title text-primary-700">鎮店之寶</h3>
					</div>
					<div className="row">
						<div className="card px-0 border-0 me-4 col rounded-0">
							<div className="position-absolute top-0 start-0 w-100">
								<div className="d-flex justify-content-between">
									<div className="" style={{ backgroundColor: "#DF5038", color: "#fff", padding: "0.5rem 1rem" }}>
										熱銷中
									</div>
									<div className="p-2">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4a4a4a" stroke="#ffffff" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
											<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
										</svg>
									</div>
								</div>
							</div>
							<div className="overflow-hidden" style={{ height: "178px" }}>
								<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							</div>
							<div className="card-body d-flex justify-content-between align-items-top border border-primary border-top-0">
								<div>
									<h5 className="card-title">行李箱內隔板</h5>
									<p className="card-text">NT$ 399</p>
								</div>
								<a href="#" className="btn mt-0 pt-0">
									<i className="bi bi-cart3"></i>
								</a>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<div className="position-absolute top-0 start-0 w-100">
								<div className="d-flex justify-content-between">
									<div className="" style={{ backgroundColor: "#DF5038", color: "#fff", padding: "0.5rem 1rem" }}>
										熱銷中
									</div>
									<div className="p-2">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4a4a4a" stroke="#ffffff" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
											<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
										</svg>
									</div>
								</div>
							</div>
							<div className="overflow-hidden" style={{ height: "178px" }}>
								<img src="https://img.freepik.com/free-photo/young-girl-holding-cup-warm-drink-outside-winter-day_23-2149328406.jpg?t=st=1744022521~exp=1744026121~hmac=aa50f5d028f9fe0d95468350728ffce1f68974fb885ea9ce3ba590a2159976c8&w=996" className="card-img-top rounded-0" alt="" />
							</div>
							<div className="card-body d-flex justify-content-between align-items-top  border border-primary border-top-0">
								<div>
									<h5 className="card-title">行李箱內隔板</h5>
									<p className="card-text">NT$ 399</p>
								</div>
								<a href="#" className="btn mt-0 pt-0">
									<i className="bi bi-cart3"></i>
								</a>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<div className="position-absolute top-0 start-0 w-100">
								<div className="d-flex justify-content-between">
									<div className="" style={{ backgroundColor: "#DF5038", color: "#fff", padding: "0.5rem 1rem" }}>
										熱銷中
									</div>
									<div className="p-2">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4a4a4a" stroke="#ffffff" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
											<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
										</svg>
									</div>
								</div>
							</div>
							<div className="overflow-hidden" style={{ height: "178px" }}>
								<img src="https://img.freepik.com/free-photo/close-up-bg-with-clothes-floor_23-2149190445.jpg?t=st=1744022583~exp=1744026183~hmac=f6d71102ee12ff055e81d927168d7815d3878cab1154bd6efd331a292982dea2&w=740" className="card-img-top rounded-0" alt="" />
							</div>
							<div className="card-body d-flex justify-content-between align-items-top  border border-primary border-top-0">
								<div>
									<h5 className="card-title">行李箱內隔板</h5>
									<p className="card-text">NT$ 399</p>
								</div>
								<a href="#" className="btn mt-0 pt-0">
									<i className="bi bi-cart3"></i>
								</a>
							</div>
						</div>
						<div className="card px-0 border-0 col rounded-0">
							<div className="position-absolute top-0 start-0 w-100">
								<div className="d-flex justify-content-between">
									<div className="" style={{ backgroundColor: "#DF5038", color: "#fff", padding: "0.5rem 1rem" }}>
										熱銷中
									</div>
									<div className="p-2">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4a4a4a" stroke="#ffffff" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
											<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
										</svg>
									</div>
								</div>
							</div>
							<div className="overflow-hidden" style={{ height: "178px" }}>
								<img src="https://img.freepik.com/free-photo/sleeping-person-getting-nap_23-2149141166.jpg?t=st=1744023166~exp=1744026766~hmac=ff7049d076ce30b04f468cc042f9541a58c3050de5b91f85f58006249518754f&w=996" className="card-img-top rounded-0" alt="" />
							</div>
							<div className="card-body d-flex justify-content-between align-items-top  border border-primary border-top-0">
								<div>
									<h5 className="card-title">行李箱內隔板</h5>
									<p className="card-text">NT$ 399</p>
								</div>
								<a href="#" className="btn mt-0 pt-0">
									<i className="bi bi-cart3"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="newArrivals py-8">
				<div className="container">
					<div className="row">
						<h3 className="text-center pb-8 special-title text-primary-700">新品上架</h3>
					</div>

					<div className="row">
						<div className="col-6">
							<div className="row">
								<div className="col-6">
									<img src="https://img.freepik.com/free-photo/close-up-underwear-classification_23-2148857564.jpg?t=st=1744279021~exp=1744282621~hmac=207e1fd53c54b4a5f681945abc6eecdc6e29f877f63e9a440c4d2cd74c475884&w=996" alt="Main Image" className="img-fluid square-img" />
								</div>

								<div className="col-6">
									<div className="d-flex flex-column">
										<img src="https://img.freepik.com/free-photo/close-up-backpack-nature_23-2148927995.jpg?t=st=1744279025~exp=1744282625~hmac=1810d20055fc0fdccfc8b2ea1596bcb58d37d93779989cf91b9ab54d6d644adb&w=740" alt="Image 1" className="img-fluid mb-3 rectangleImg" />
										<img
											src="https://img.freepik.com/free-photo/black-garment-bag-suit-storage-protection_53876-106020.jpg?t=st=1744279028~exp=1744282628~hmac=64eeb3b82647f640034a4a347e375fd3152dbedc32366c38a951dc7880868ba4&w=740"
											alt="Image 2"
											className="img-fluid mb-3 rectangleImg"
										/>
										<img src="https://img.freepik.com/free-photo/top-view-toilet-bag-products-arrangement_23-2149879446.jpg?t=st=1744279031~exp=1744282631~hmac=6da85ed5aaa14568f26526ec7eec93bfbef08c649795a19bea5ac8953e774203&w=996" alt="Image 3" className="img-fluid rectangleImg" />
									</div>
								</div>
							</div>
						</div>
						{/* <div className="col-lg-6">
							<div className="row">
								<div className="col-6">
									<img src="https://img.freepik.com/free-photo/close-up-underwear-classification_23-2148857564.jpg?t=st=1744279021~exp=1744282621~hmac=207e1fd53c54b4a5f681945abc6eecdc6e29f877f63e9a440c4d2cd74c475884&w=996" alt="Image 1" className="img-fluid square-img" />
								</div>
								<div className="col-6">
									<div className="row">
										<div className="col-12 mb-3">
											<img src="https://img.freepik.com/free-photo/close-up-backpack-nature_23-2148927995.jpg?t=st=1744279025~exp=1744282625~hmac=1810d20055fc0fdccfc8b2ea1596bcb58d37d93779989cf91b9ab54d6d644adb&w=740" alt="Image 2" className="img-fluid rectangleImg" />
										</div>
										<div className="col-12 mb-3">
											<img src="https://img.freepik.com/free-photo/black-garment-bag-suit-storage-protection_53876-106020.jpg?t=st=1744279028~exp=1744282628~hmac=64eeb3b82647f640034a4a347e375fd3152dbedc32366c38a951dc7880868ba4&w=740" alt="Image 3" className="img-fluid rectangleImg" />
										</div>
										<div className="col-12">
											<img src="https://img.freepik.com/free-photo/top-view-toilet-bag-products-arrangement_23-2149879446.jpg?t=st=1744279031~exp=1744282631~hmac=6da85ed5aaa14568f26526ec7eec93bfbef08c649795a19bea5ac8953e774203&w=996" alt="Image 4" className="img-fluid rectangleImg" />
										</div>
									</div>
								</div>
							</div>
						</div> */}
						{/* 右側區域，佔一半的寬度 */}
						<div className="col-lg-6">
							<div className="h-100">
								<h4>收納神器全新登場</h4>
								<p>還在為準備行李頭痛嗎？</p>
								<p>全新上架的旅行收納神器，專為解決行李雜亂與空間不足而設計。</p>
								<p>無論是背包客的簡約需求，還是家庭旅行的多樣收納，都能讓你輕鬆整理，最大利用行李箱空間。</p>
							</div>
						</div>
						{/* <div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">一站式旅行打包工具專家</h6>
									<p className="card-text fs-7">從行李收納到旅途便攜，我們提供全方位的旅行工具，讓你的旅程準備輕鬆又高效。不論是家庭出行、背包旅行，還是商務差旅，旅人集所都是你的最佳夥伴。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">精選高品質旅行好物</h6>
									<p className="card-text fs-7">我們精心挑選每一件產品，注重實用性與耐用性，讓你在旅途中放心使用。每款商品都經過反覆測試，只為確保滿足你旅途中的每一個需求。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">環保與可持續理念</h6>
									<p className="card-text fs-7">愛旅行，也愛地球！我們推崇綠色出行，提供可重複使用的分裝瓶、環保袋等工具，讓你在旅行中減少浪費，輕鬆實現環保生活。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">貼心售後與服務</h6>
									<p className="card-text fs-7">我們不僅賣產品，更關心你的旅途體驗。從購買到使用，提供全程貼心服務，讓你每一次選購都充滿信任與安心。</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<div className="group py-8">
				<div className="container">
					<div className="row">
						<h3 className="text-center pb-8 special-title text-primary-700">你是以下族群嗎</h3>
					</div>
					<div className="row my-3">
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">一站式旅行打包工具專家</h6>
									<p className="card-text fs-7">從行李收納到旅途便攜，我們提供全方位的旅行工具，讓你的旅程準備輕鬆又高效。不論是家庭出行、背包旅行，還是商務差旅，旅人集所都是你的最佳夥伴。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">精選高品質旅行好物</h6>
									<p className="card-text fs-7">我們精心挑選每一件產品，注重實用性與耐用性，讓你在旅途中放心使用。每款商品都經過反覆測試，只為確保滿足你旅途中的每一個需求。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">環保與可持續理念</h6>
									<p className="card-text fs-7">愛旅行，也愛地球！我們推崇綠色出行，提供可重複使用的分裝瓶、環保袋等工具，讓你在旅行中減少浪費，輕鬆實現環保生活。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">貼心售後與服務</h6>
									<p className="card-text fs-7">我們不僅賣產品，更關心你的旅途體驗。從購買到使用，提供全程貼心服務，讓你每一次選購都充滿信任與安心。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="feature py-8">
				<div className="container">
					<div className="row">
						<h3 className="text-center pb-8 special-title text-primary-700">旅人集所の特色</h3>
					</div>
					<div className="row my-3">
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">一站式旅行打包工具專家</h6>
									<p className="card-text fs-7">從行李收納到旅途便攜，我們提供全方位的旅行工具，讓你的旅程準備輕鬆又高效。不論是家庭出行、背包旅行，還是商務差旅，旅人集所都是你的最佳夥伴。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">精選高品質旅行好物</h6>
									<p className="card-text fs-7">我們精心挑選每一件產品，注重實用性與耐用性，讓你在旅途中放心使用。每款商品都經過反覆測試，只為確保滿足你旅途中的每一個需求。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">環保與可持續理念</h6>
									<p className="card-text fs-7">愛旅行，也愛地球！我們推崇綠色出行，提供可重複使用的分裝瓶、環保袋等工具，讓你在旅行中減少浪費，輕鬆實現環保生活。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">貼心售後與服務</h6>
									<p className="card-text fs-7">我們不僅賣產品，更關心你的旅途體驗。從購買到使用，提供全程貼心服務，讓你每一次選購都充滿信任與安心。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="evaluate py-8">
				<div className="container">
					<div className="row">
						<h3 className="text-center pb-8 special-title text-primary-700">顧客の好評</h3>
					</div>
					<div className="row my-3">
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">一站式旅行打包工具專家</h6>
									<p className="card-text fs-7">從行李收納到旅途便攜，我們提供全方位的旅行工具，讓你的旅程準備輕鬆又高效。不論是家庭出行、背包旅行，還是商務差旅，旅人集所都是你的最佳夥伴。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">精選高品質旅行好物</h6>
									<p className="card-text fs-7">我們精心挑選每一件產品，注重實用性與耐用性，讓你在旅途中放心使用。每款商品都經過反覆測試，只為確保滿足你旅途中的每一個需求。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 me-4 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">環保與可持續理念</h6>
									<p className="card-text fs-7">愛旅行，也愛地球！我們推崇綠色出行，提供可重複使用的分裝瓶、環保袋等工具，讓你在旅行中減少浪費，輕鬆實現環保生活。</p>
								</div>
							</div>
						</div>
						<div className="card px-0 border-0 col rounded-0">
							<img src="https://img.freepik.com/free-photo/opened-luggage-sitting-concrete_23-2148328906.jpg?t=st=1740565434~exp=1740569034~hmac=05e7c66a7ef844b71fd2ee2dbde5f24585473cb592d1bef76d5cabefbed1fca2&w=1060" className="card-img-top rounded-0" alt="" />
							<div className="card-body d-flex justify-content-between align-items-top px-0">
								<div>
									<h6 className="card-title">貼心售後與服務</h6>
									<p className="card-text fs-7">我們不僅賣產品，更關心你的旅途體驗。從購買到使用，提供全程貼心服務，讓你每一次選購都充滿信任與安心。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
