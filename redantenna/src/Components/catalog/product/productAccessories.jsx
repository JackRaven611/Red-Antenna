import { ProductStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
export const ProductAccessories = ({ type, id, image }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products[type][id];
	const spec = product.spec;
	const common = languageData.products.common;
	const text = `${id.substring(0, 9)}Text`;

	return (
		<ProductStyled>
			<img src={image} alt={`${id}`} loading='lazy' />
			<div className='wrapper'>
				<h3>{product.model}</h3>

				<ul className='accessories'>
					<li>
						<p>{common[text]}</p>
					</li>
					<li>
						<p>{spec.power}</p>
						<p>{spec.size}</p>
						<p>{spec.weight}</p>
					</li>
					<li>
						<p>
							{common.connectors} {spec.feeder}, {spec.antenna}
						</p>
					</li>
					<li></li>
				</ul>

				<a href={product.storeLink} target='_blank'>
					{common.linkTitle}
				</a>
			</div>
		</ProductStyled>
	);
};
