import { NavStyled } from ".";
import { HashLink as Link } from "react-router-hash-link";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { LanguageChangeBtn } from "../languageChange/languageChangeBtn/languageChangeBtn";
import { Hamburger } from "../hamburger/hamburger";
import { BurgerContext } from "../hamburger/burgerContext/burgerContext";

export const Nav = () => {
	const { languageData } = useContext(LanguageContext);
	const nav = languageData.nav;
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

				<ul className='desktopNav'>
					<li>
						<Link
							className='navButtons'
							to='/products#'
							onClick={toggleBurgerNav}
						>
							{nav.navBtnProducts}
						</Link>
					</li>
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
					{/* <li>
				<LanguageChangeBtn />
			</li> */}
				</ul>
				<Hamburger className='hamburger' />
			</div>
		</NavStyled>
	);
};
