import { NavStyled } from ".";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { LanguageChangeBtn } from "../languageChange/languageChangeBtn/languageChangeBtn";
import { Hamburger } from "../hamburger/hamburger";
import { BurgerContext } from "../hamburger/burgerContext/burgerContext";
import { Dropdown } from "./dropdown";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Nav = () => {
	const { languageData } = useContext(LanguageContext);
	const nav = languageData.nav;
	const location = useLocation();
	const { hamburgerOpen, setHamburgerOpen } = useContext(BurgerContext);
	const toggleBurgerNav = () => {
		hamburgerOpen
			? setHamburgerOpen(!hamburgerOpen)
			: setHamburgerOpen(hamburgerOpen);
	};

	return (
		<NavStyled $hamburgerOpen={hamburgerOpen}>
			<div className='wrapper'>
				<Link className='homeButton' to='/#' onClick={toggleBurgerNav}>
					<h1>{nav.brandName}</h1>
					<p>{nav.homeBtnP}</p>
				</Link>
				<Hamburger className='hamburger' />
				<ul className='desktopNav'>
					<li>
						<Dropdown toggleBurgerNav={toggleBurgerNav} />
					</li>
					{/* <li>
						<Link
							className='navButtons'
							to='/blog#'
							onClick={toggleBurgerNav}
						>
							{nav.navBtnBlog}
						</Link>
					</li> */}
					<li>
						<Link
							className='navButtons'
							to='/about#'
							onClick={toggleBurgerNav}
						>
							{nav.navBtnAbout}
						</Link>
					</li>
					<li>
						<Link
							className='navButtons'
							to='/contact#'
							onClick={toggleBurgerNav}
						>
							{nav.navBtnContact}
						</Link>
					</li>
					{location.pathname !== "/distributors" ? (
						<li>
							<LanguageChangeBtn />
						</li>
					) : null}
				</ul>
			</div>
		</NavStyled>
	);
};
