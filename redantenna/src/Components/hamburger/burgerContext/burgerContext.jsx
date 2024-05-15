import React, { createContext, useState, useEffect } from "react";

export const BurgerContext = createContext();

export const BurgerProvider = ({ children }) => {
	const [hamburgerOpen, setHamburgerOpen] = useState(true);
	useEffect(() => {
		setHamburgerOpen(!hamburgerOpen);
	}, []);

	return (
		<BurgerContext.Provider value={{ hamburgerOpen, setHamburgerOpen }}>
			{children}
		</BurgerContext.Provider>
	);
};
