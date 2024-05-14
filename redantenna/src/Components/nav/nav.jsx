import { NavStyled } from ".";
import { HashLink as Link } from "react-router-hash-link";
import { useContext } from "react";
import { useState } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { LanguageChangeBtn } from "../languageChange/languageChangeBtn/languageChangeBtn";
import { Hamburger } from "../hamburger/hamburger";

export const Nav = () => {
	const { languageData } = useContext(LanguageContext);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};
	console.log(hamburgerOpen);
	return (
		<NavStyled hamburgerOpen={hamburgerOpen}>
			<div className='wrapper'>
				<Link className='homeButton' to='/#'>
					<h1>{languageData.brandName}</h1>
					<p>{languageData.homeBtnP}</p>
				</Link>

				<ul className='desktopNav'>
					<li>
						<Link className='navButtons' to='/products#'>
							{languageData.navBtnProducts}
						</Link>
					</li>
					<li>
						<Link className='navButtons' to='/about#'>
							{languageData.navBtnAbout}
						</Link>
					</li>
					<li>
						<Link className='navButtons' to='/contact#'>
							{languageData.navBtnContact}
						</Link>
					</li>
					{/* <li>
					<LanguageChangeBtn />
				</li> */}
				</ul>
				<Hamburger
					className='hamburger'
					burgerState={toggleHamburger}
				/>
			</div>
		</NavStyled>
	);
};
