import { NavStyled } from ".";
import { LanguageChangeBtn } from "../languageChange/languageChangeBtn/languageChangeBtn";

export const Nav = ({ languageData }) => {
	return (
		<NavStyled>
			<ul>
				<li>
					<a className='homeButton' href=''>
						<h1>{languageData.brandName}</h1>
						<p>{languageData.homeBtnP}</p>
					</a>
				</li>
				<li>
					<a className='navButtons' href=''>
						{languageData.navBtnProducts}
					</a>
				</li>
				<li>
					<a className='navButtons' href=''>
						{languageData.navBtnAbout}
					</a>
				</li>
				<li>
					<a className='navButtons' href=''>
						{languageData.navBtnContact}
					</a>
				</li>
				<li>
					<LanguageChangeBtn />
				</li>
			</ul>
		</NavStyled>
	);
};
