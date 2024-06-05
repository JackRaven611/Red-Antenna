import { useContext, useEffect, useState } from "react";
import { ProductPageStyled } from ".";
import { AntennaContext } from "./antennaProvider";
import { LanguageContext } from "../languageChange/languageContext";
import { VaraintPanel } from "./variantPanel/variantPanel";

export const ProductPage = () => {
	const { languageData } = useContext(LanguageContext);
	const { type, size } = useContext(AntennaContext);
	const product = languageData.products.wire[type];
	const common = languageData.products.common;

	return (
		<ProductPageStyled>
			<div>
				<div>
					<img src='' alt='' />
					<div>
						<h2>{product.model}</h2>
						<VaraintPanel />
						<p>{product.description}</p>
						<a href=''></a>
						<ul>
							<li>
								<h3>{common.bandsTitle}</h3>
								<p>{product[size].bands}</p>
							</li>
							<li>
								<h3>{common.spanTitle}</h3>
								<p>{product[size].span}</p>
							</li>
							<li>
								<h3>{common.weightTitle}</h3>
								<p>{product[size].weight}</p>
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
					</div>
				</div>
			</div>
		</ProductPageStyled>
	);
};
