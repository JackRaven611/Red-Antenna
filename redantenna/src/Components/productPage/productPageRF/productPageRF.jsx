import { useContext, useEffect } from "react";
import { ProductPageStyled } from "./";
import { LanguageContext } from "../../languageChange/languageContext";
import { VaraintPanel } from "./variantPanel/variantPanel";
import RFMinishort from "../../../img/mini40.jpg";
import RFMinilong from "../../../img/mini80.jpg";
import RFMinimax from "../../../img/miniMax.jpg";
import RFMidishort from "../../../img/midi40.jpg";
import RFMidilong from "../../../img/midi80.jpg";
import RFHDshort from "../../../img/hd40.jpg";
import RFHDlong from "../../../img/hd80.jpg";
import RFStandardshort from "../../../img/standard40.jpg";
import RFStandardlong from "../../../img/standard80.jpg";
import RFExtremeshort from "../../../img/RFExtreme.jpg";
import RFExtremelong from "../../../img/RFExtremefull.jpg";
import { AntennaContext } from "../antennaProvider";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPageRF = ({ series, type, size }) => {
	const { languageData } = useContext(LanguageContext);
	const { setSeries } = useContext(AntennaContext);
	const product = languageData.products.wire[series][type];
	const common = languageData.products.common;

	useEffect(() => {
		setSeries(series);
	}, []);

	const redFedImg = {
		minishort: RFMinishort,
		minilong: RFMinilong,
		minimax: RFMinimax,
		midishort: RFMidishort,
		midilong: RFMidilong,
		standardshort: RFStandardshort,
		standardlong: RFStandardlong,
		hdshort: RFHDshort,
		hdlong: RFHDlong,
		extremeshort: RFExtremeshort,
		extremelong: RFExtremelong,
	};

	const redDipole = {};

	return (
		<ProductPageStyled>
			<div className='wrapper'>
				<div className='selectorkWrapper'>
					<img src={redFedImg[type + size]} alt={product.model} />
					<aside>
						<h2>
							{product[size]
								? product[size].model
								: product.model}
						</h2>
						<VaraintPanel />
						<p>
							{size === "max"
								? product.max.description
								: product.description}
						</p>
						<div className='linkWrapper'>
							<a
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
							{product[size] ? product[size].span : product.span}
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
							{size === "max" ? product.max.range : product.range}
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
							{size === "max" ? product.max.core : product.core}
						</p>
					</li>
					<li className='description'>
						<h3>{common.windingsTitle}</h3>
						<p>{product.windings}</p>
					</li>
					<li className='description'>
						<h3>{common.antennaWireTitle}</h3>
						<p>{product.antennaWire}</p>
					</li>
					<li className='description'>
						<h3>{common.wireTitle}</h3>
						<p>{product.wire}</p>
					</li>
				</ul>
			</div>
		</ProductPageStyled>
	);
};
