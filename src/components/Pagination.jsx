function Pagination({ pageInfo, handlePageChange }) {
    return (
		<div className="d-flex justify-content-center">
			<nav>
				<ul className="pagination">
					<li className={`page-item ${!pageInfo.has_pre && "disabled"}`}>
						<button onClick={() => handlePageChange(pageInfo.current_page - 1)} className="page-link text-primary" href="#">
							&#60;
						</button>
					</li>
					{Array.from({ length: pageInfo.total_pages }).map((_, index) => (
						<li className={`page-item ${pageInfo.current_page === index + 1 && "active"}`} key={index}>
							<button onClick={() => handlePageChange(index + 1)} className="page-link" href="#">
								{index + 1}
							</button>
						</li>
					))}
					<li className={`page-item ${!pageInfo.has_next && "disabled"}`}>
						<button onClick={() => handlePageChange(pageInfo.current_page + 1)} className="page-link text-primary" href="#">
							&#62;
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}
export default Pagination;