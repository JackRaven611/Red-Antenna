import { ProductStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import { Link } from "react-router-dom";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Product = ({ type, link, image, series }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products[type][series];

	return (
		<ProductStyled>
			<Link to={link}>
				<img src={image} alt={`${series}`} loading='lazy' />
				<div className='wrapper'>
					<h3>{product.common.series}</h3>
					<p>{product.common.description}</p>
				</div>
			</Link>
		</ProductStyled>
	);
};
