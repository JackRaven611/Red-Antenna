import React, { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { Link } from "react-router-dom";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Accordion = ({ toggleBurgerNav }) => {
	const { languageData } = useContext(LanguageContext);

	return (
		<div className='accordionItem'>
			<Link
				className='navButtons'
				to='/products#'
				onClick={toggleBurgerNav}
			>
				{languageData.nav.navBtnProducts}
			</Link>
			<div className='navButtonsAccordion'>
				<Link
					className=' navButtons'
					to='/products/wire#'
					onClick={toggleBurgerNav}
				>
					{languageData.products.wire.common.title}
				</Link>
				<Link
					className='navButtons'
					to='/products/vertical#'
					onClick={toggleBurgerNav}
				>
					{languageData.products.vertical.common.title}
				</Link>
				<Link
					className='navButtons'
					to='/products/accessories#'
					onClick={toggleBurgerNav}
				>
					{languageData.products.accessories.common.title}
				</Link>
			</div>
		</div>
	);
};
