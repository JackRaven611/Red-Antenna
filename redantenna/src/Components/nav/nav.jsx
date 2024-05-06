import { NavStyled } from ".";
import { Link } from "react-router-dom";
import { LanguageChangeBtn } from "../languageChange/languageChangeBtn/languageChangeBtn";

export const Nav = ({ languageData }) => {
	return (
		<NavStyled>
			<ul>
				<li>
					<Link className='homeButton' to='/'>
						<h1>{languageData.brandName}</h1>
						<p>{languageData.homeBtnP}</p>
					</Link>
				</li>
				<li>
					<Link className='navButtons' to='/products'>
						{languageData.navBtnProducts}
					</Link>
				</li>
				<li>
					<Link className='navButtons' to='/about'>
						{languageData.navBtnAbout}
					</Link>
				</li>
				<li>
					<Link className='navButtons' to='/contact'>
						{languageData.navBtnContact}
					</Link>
				</li>
				<li>
					<LanguageChangeBtn />
				</li>
			</ul>
		</NavStyled>
	);
};
