import { ProductStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import { Link } from "react-router-dom";
import { AntennaContext } from "../../productPage/antennaProvider";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Product = ({ type, link, image, series }) => {
	const { languageData } = useContext(LanguageContext);
	const { setSeries } = useContext(AntennaContext);
	const product = languageData.products[type][series];
	const handleSeriesChange = () => {
		setSeries(series);
	};

	return (
		<ProductStyled>
			<Link to={link} onClick={handleSeriesChange}>
				<img src={image} alt={`${series}`} loading='lazy' />
				<div className='wrapper'>
					<h3>{product.common.series}</h3>
					<p>{product.common.description}</p>
				</div>
			</Link>
		</ProductStyled>
	);
};
