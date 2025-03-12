export default function AboutPage(){
    return (
		<>
			<div className="banner">
				<div className="container-fluid gx-0" style={{ height: "50vh" }}>
					<div className="h-100 bg-primary">
						<img className="w-100 h-100" style={{ objectFit: "cover", objectPosition: "top" }} src="https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="關於我們" />
					</div>
				</div>
			</div>
			<div className="timeLineContainer">
				<div className="container py-8">
					<div className="row">
						<h3 className="text-center pb-5 special-title text-primary-700">品牌年表</h3>
					</div>
					<ul className="timeline">
						<li className="event text-primary_600">
							<div className="time fs-4">2004年</div>
							<h3>旅人集所 於線上創立</h3>
						</li>
						<li className="event text-primary_600">
							<div className="time fs-4">2005年</div>
							<h3>推出「設計師聯名系列」，將實用性與美學結合</h3>
						</li>
						<li className="event text-primary_600">
							<div className="time fs-4">2010年</div>
							<h3>成功吸引超過 20,000 名用戶註冊</h3>
						</li>
						<li className="event text-primary_600">
							<div className="time fs-4">2018年</div>
							<h3>推出環保旅行系列，響應可持續發展G的全球趨勢</h3>
						</li>
						<li className="event text-primary_600" style={{ marginBottom: "-44px" }}>
							<div className="time fs-4">2024年</div>
							<h3>
								打造專屬社群「旅人之友」，分享旅行打包技巧、目的地推薦和用戶故事 累計 50,000+ 名活躍成員
								<br />
								我們將持續為大眾帶來更便利、貼心的商品
							</h3>
						</li>
					</ul>
				</div>
			</div>
			<div className="mission">
				<div className="container py-8">
					<h3 className="text-center special-title text-primary-700">鎮店之寶</h3>
					<div className="row">
						<div className="col-12 order-2 order-md-1">
							<h5 className="text-center py-40 text-primary">旅行的起點，從打包開始</h5>
							<p>
								旅人集所誕生於我們對旅行的熱愛。每次旅行，從夢想的啟程到抵達的欣喜，行李打包都是不可避免的第一步。但我們發現，雜亂的行李常常帶來不便，而找到適合的收納工具更是困難重重。因此，我們決心打造一個專注於旅行收納的品牌，用實用、創新的工具，解決旅途中打包與攜帶的各種難題，讓每一位旅人都能享受輕鬆、便利的旅程。
							</p>
							<p>旅人集所不僅僅是旅行工具的提供者，更是旅途中最貼心的夥伴。我們希望每一件產品都能讓用戶感受到品質與舒適，也希望通過我們的努力，讓旅行準備變成一件愉快的事。我們相信，整理行囊是旅程的開始，而我們的使命，是讓這一步變得更簡單、更快樂。</p>
						</div>
						<div className="col-12 order-1 order-md-2">
							<div className="container-fluid gx-0" style={{ height: "50vh" }}>
								<div className="h-100 bg-primary">
									<img
										className="w-100 h-100"
										style={{ objectFit: "cover", objectPosition: "top" }}
										src="https://images.unsplash.com/photo-1688828792910-ca9567d15054?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt="關於我們"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="socialResponsibility">
				<div className="container py-8">
					<div className="row">
						<h3 className="text-center pb-5 special-title text-primary-700">社會責任</h3>
					</div>
					<div className="row mb-60">
						<div className="col-12 col-md-6 col-lg-3">
							<img
								className="w-100 filterGray-img"
								style={{ objectFit: "cover" }}
								src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="socialResponsibility01"
							/>
						</div>
						<div className="col-12 col-md-6 col-lg-9">
							<div className="ps-4 mobile-ps-0">
								<h5 className="mb-3 text-primary_700">推動旅行教育</h5>
								<p className="mb-12 text-gray-800">我們認為，旅行不僅是移動，更是一種學習和探索的機會。旅人集所致力於推廣旅行教育，分享旅行整理技巧、目的地文化知識，並幫助旅行者提高規劃和收納的能力。</p>
								<ul className="text-gray-800">
									<li className="mb-12">在社群分享免費旅行攻略和收納技巧</li>
									<li>舉辦線上與線下的旅行講座，邀請專家分享環保出行和文化旅行的心得</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-6 col-lg-3">
							<img className="w-100 filterGray-img" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="socialResponsibility02" />
						</div>
						<div className="col-12 col-md-6 col-lg-9">
							<div className="ps-4 mobile-ps-0">
								<h5 className="mb-3 text-primary_700">支持弱勢，回饋社會</h5>
								<p className="mb-12 text-gray-800">我們相信旅行應該是一種人人都能享受的自由。旅人集所每年捐贈部分收益，用於支持弱勢家庭和偏遠地區的教育與旅遊體驗計劃，幫助更多人感受到旅行的美好。</p>
								<ul className="text-gray-800">
									<li className="mb-12">與社福團體合作，為弱勢家庭提供旅行所需的基本裝備</li>
									<li>推動「探索世界」專案，資助偏遠地區的孩子參與文化交流活動</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}