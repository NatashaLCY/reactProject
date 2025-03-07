export default function SalesServicePage() {
	return (
		<>
			<div className="container mt-5">
				<h2 className="text-center mb-4">售後服務</h2>
				<div className="accordion" id="serviceAccordion">
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingOne">
							<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								退換貨政策
							</button>
						</h2>
						<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#serviceAccordion">
							<div className="accordion-body">若商品有瑕疵或錯誤配送，請於收到商品後7天內聯繫客服申請退換貨。</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingTwo">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								退款處理
							</button>
						</h2>
						<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#serviceAccordion">
							<div className="accordion-body">退貨確認後，我們將於7個工作天內辦理退款，並依照原付款方式退回。</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								客服聯絡方式
							</button>
						</h2>
						<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#serviceAccordion">
							<div className="accordion-body">
								<p>客服信箱：support@example.com</p>
								<p>客服電話：+123-456-7890（週一至週五 09:00-18:00）</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}