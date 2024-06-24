import { useContext } from "react";
import { ProductPageStyled } from ".";
import { LanguageContext } from "../../languageChange/languageContext";
import { VaraintPanel } from "./variantPanel/variantPanel";
import { AntennaImg } from "./antennaImg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPage = ({ series, type, size }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products.wire[series][type];
	const common = languageData.products.common;

	return (
		<ProductPageStyled>
			<div className='wrapper'>
				<div className='selectorkWrapper'>
					<AntennaImg series={series} type={type} size={size} />
					<aside>
						<h2>
							{product[size]
								? product[size].model
								: product.model}
						</h2>
						<VaraintPanel series={series} />
						<p>
							{size === "max"
								? product.max.description
								: product.description}
						</p>
						<div className='linkWrapper'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href={
									product[size]
										? product[size].storeLink
										: product.storeLink
								}
							>
								{common.linkTitle}
							</a>
						</div>
					</aside>
				</div>
				<div className='infoWrapper'>
					<div>
						<h3>
							{languageData.products.wire[series].common.series}
						</h3>
						<p>
							{
								languageData.products.wire[series].common
									.descriptionPage
							}
						</p>
					</div>
					<ul>
						<li className='description'>
							<h3>{common.bandsTitle}</h3>
							<p>
								{product[size]
									? product[size].bands
									: product.bands}
							</p>
						</li>
						<li className='description'>
							<h3>{common.spanTitle}</h3>
							<p>
								{product[size]
									? product[size].span
									: product.span}
							</p>
						</li>
						<li className='description'>
							<h3>{common.weightTitle}</h3>
							<p>
								{product[size]
									? product[size].weight
									: product.weight}
							</p>
						</li>
						<li className='description'>
							<h3>{common.sizeTitle}</h3>
							<p>{product.size}</p>
						</li>
						<li className='description'>
							<h3>{common.rangeTitle}</h3>
							<p>
								{size === "max"
									? product.max.range
									: product.range}
							</p>
						</li>
						<li className='description'>
							<h3>{common.swrTitle}</h3>
							<p>{product.swr}</p>
						</li>
						<li className='description'>
							<h3>{common.powerTitle}</h3>
							<p>
								{product.ssb}, {product.cw}, {product.digi}
							</p>
						</li>
						<li className='description'>
							<h3>{common.connectors}</h3>
							<p>
								{product.feeder}, {product.antenna}
							</p>
						</li>
						<li className='description'>
							<h3>{common.coreTitle}</h3>
							<p>
								{size === "max"
									? product.max.core
									: product.core}
							</p>
						</li>
						<li className='description'>
							<h3>{common.windingsTitle}</h3>
							<p>{product.windings}</p>
						</li>
						<li className='description'>
							<h3>{common.antennaWireTitle}</h3>
							<p>
								{product.antennaWire}
								<sup>2</sup>
							</p>
						</li>
						<li className='description'>
							<h3>{common.wireTitle}</h3>
							<p>{product.wire}</p>
						</li>
					</ul>
				</div>
			</div>
		</ProductPageStyled>
	);
};
