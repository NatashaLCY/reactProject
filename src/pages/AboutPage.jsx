export default function AboutPage(){
    return (
		<>
			<div className="banner">
				<div className="container-fluid gx-0">
					<div className="col">
						<img className="w-100" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="關於我們" />
					</div>
				</div>
			</div>
			<div className="about">
				<div className="container mt-5">
					<h2>關於我們</h2>
					<p>我們的公司致力於提供卓越的服務，滿足客戶的需求。</p>
					<div className="cv d-flex justify-content-between">
						<div className="card me-2" style={{ width: "33.3%" }}>
							<img src="https://images.unsplash.com/photo-1643921160799-68f66550b8a3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="團隊成員" />
							<div className="card-body">
								<h5 className="card-title">姓名</h5>
								<p className="card-text">職位描述。</p>
							</div>
						</div>
						<div className="card me-2" style={{ width: "33.3%" }}>
							<img src="https://images.unsplash.com/photo-1612740540701-ff1213392e57?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="團隊成員" />
							<div className="card-body">
								<h5 className="card-title">姓名</h5>
								<p className="card-text">職位描述。</p>
							</div>
						</div>
						<div className="card" style={{ width: "33.3%" }}>
							<img src="https://images.unsplash.com/photo-1599409493347-a1dc0ac9ff16?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="團隊成員" />
							<div className="card-body">
								<h5 className="card-title">姓名</h5>
								<p className="card-text">職位描述。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contact">
				<div className="container my-5">
					<h2 className="text-center mb-4">聯絡我們</h2>
					<div className="row justify-content-center">
						<div className="col-md-6">
							<form>
								<div className="mb-3">
									<label htmlFor="name" className="form-label">
										姓名
									</label>
									<input type="text" className="form-control" id="name" placeholder="請輸入您的姓名" required />
								</div>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										電子郵件
									</label>
									<input type="email" className="form-control" id="email" placeholder="請輸入您的電子郵件" required />
								</div>
								<div className="mb-3">
									<label htmlFor="message" className="form-label">
										訊息
									</label>
									<textarea className="form-control" id="message" rows="4" placeholder="請輸入您的訊息" required></textarea>
								</div>
								<div className="d-grid">
									<button type="submit" className="btn btn-primary">
										送出
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}