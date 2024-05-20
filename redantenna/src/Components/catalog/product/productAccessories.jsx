import { ProductStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
export const ProductAccessories = ({ type, id, image }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products[type][id];
	const spec = languageData.products[type][id].spec;
	return (
		<ProductStyled>
			<img src={image} alt={`${id}`} />
			<div className='wrapper'>
				<h3>{product.model}</h3>

				<ul>
					<li>
						<p>{spec.text}</p>
					</li>
					<li>
						<p>
							{spec.power.title} {spec.power.value}
						</p>
						<p>{spec.size}</p>
						<p>{spec.weight}</p>
					</li>
					<li>
						<p>
							{spec.connectors.title} {spec.connectors.feeder},{" "}
							{spec.connectors.antenna}
						</p>
					</li>
					<li></li>
				</ul>

				<a href={product.storeLink}>{product.linkText}</a>
			</div>
		</ProductStyled>
	);
};
