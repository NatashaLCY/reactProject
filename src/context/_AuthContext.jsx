import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		if (token) {
			setIsAuth(true); // 如果有 token，就表示已經登入
		}
	}, []);
	return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};