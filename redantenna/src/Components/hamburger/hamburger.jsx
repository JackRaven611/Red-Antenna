import { useContext } from "react";
import { HamburgerStyled } from ".";
import { BurgerContext } from "./burgerContext/burgerContext";
import menu from "../../img/menu.svg";
import close from "../../img/close.svg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Hamburger = () => {
	const { hamburgerOpen, setHamburgerOpen } = useContext(BurgerContext);
	const toggleBurger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<HamburgerStyled onClick={toggleBurger}>
			<img
				src={hamburgerOpen ? close : menu}
				alt={hamburgerOpen ? "close" : "menu"}
				loading='lazy'
			/>
		</HamburgerStyled>
	);
};
