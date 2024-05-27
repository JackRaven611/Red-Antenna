import { ProductStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
export const Product = ({ type, id, image }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products[type][id];
	const spec = languageData.products[type][id].spec;
	return (
		<ProductStyled>
			<img src={image} alt={`${id}`} loading='lazy' />
			<div className='wrapper'>
				<h3>{product.model}</h3>

				<ul>
					<li>
						<p>{spec.text}</p>
						<p>{spec.bands}</p>
						<p>{spec.span}</p>
						<p>{spec.weight}</p>
						<p>{spec.size}</p>
						<p>{spec.range}</p>
						<p>{spec.swr}</p>
					</li>
					<li>
						<p>
							{spec.power.title} {spec.power.ssb}, {spec.power.cw}
							, {spec.power.digi}
						</p>
					</li>
					<li>
						<p>
							{spec.connectors.title} {spec.connectors.feeder},{" "}
							{spec.connectors.antenna}
						</p>
					</li>
					<li>
						<p>{spec.core}</p>
						<p>{spec.windings}</p>
						<p>
							{spec.antennaWire}
							<sup>2</sup>
						</p>
						<p>{spec.wire}</p>
					</li>
				</ul>

				<a href={product.storeLink} target='_blank'>
					{product.linkText}
				</a>
			</div>
		</ProductStyled>
	);
};
