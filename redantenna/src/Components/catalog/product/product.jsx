import { ProductStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import { Link } from "react-router-dom";
export const Product = ({ type, id, image }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products[type][id];
	const common = languageData.products.common;

	const text = `${id.slice(0, -2)}Text`;

	return (
		<ProductStyled>
			<img src={image} alt={`${id}`} loading='lazy' />
			<div className='wrapper'>
				<h3>{product.model}</h3>

				<ul>
					<li>
						<p>{product.description}</p>
					</li>
					<li>
						<h3>{common.spanTitle}</h3>
						<p>{product.span}</p>
					</li>
					<li>
						<h3>{common.weightTitle}</h3>
						<p>{product.weight}</p>
					</li>
					<li>
						<h3>{common.sizeTitle}</h3>
						<p>{product.size}</p>
					</li>
					<li>
						<h3>{common.rangeTitle}</h3>
						<p>{product.range}</p>
					</li>
					<li>
						<h3>{common.swrTitle}</h3>
						<p>{product.swr}</p>
					</li>
					<li>
						<h3>{common.powerTitle}</h3>
						<p>
							{product.ssb} {product.cw} {product.digi}
						</p>
					</li>
					<li>
						<h3>{common.connectors}</h3>
						<p>{product.feeder}</p>
						<p>{product.antenna}</p>
					</li>
					<li>
						<h3>{common.coreTitle}</h3>
						<p>{product.core}</p>
					</li>
					<li>
						<h3>{common.windingsTitle}</h3>
						<p>{product.windings}</p>
					</li>
					<li>
						<h3>{common.antennaWireTitle}</h3>
						<p>{product.antennaWire}</p>
					</li>
					<li>
						<h3>{common.wireTitle}</h3>
						<p>{product.wire}</p>
					</li>
				</ul>

				<Link to={product.storeLink}>{common.linkTitle}</Link>
			</div>
		</ProductStyled>
	);
};
