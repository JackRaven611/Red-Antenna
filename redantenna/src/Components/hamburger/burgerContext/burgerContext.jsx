import React, { createContext, useState, useEffect } from "react";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

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
