import { useContext } from "react";
import { ProductPageStyled } from ".";
import { AntennaContext } from "./antennaProvider";
import { LanguageContext } from "../languageChange/languageContext";
import { VaraintPanel } from "./variantPanel/variantPanel";
import RFMinishort from "../../img/mini40.jpg";
import RFMinilong from "../../img/mini80.jpg";
import RFMinimax from "../../img/miniMax.jpg";
import RFMidishort from "../../img/midi40.jpg";
import RFMidilong from "../../img/midi80.jpg";
import RFHDshort from "../../img/hd40.jpg";
import RFHDlong from "../../img/hd80.jpg";
import RFStandardshort from "../../img/standard40.jpg";
import RFStandardlong from "../../img/standard80.jpg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPageRF = () => {
	const { languageData } = useContext(LanguageContext);
	const { type, size } = useContext(AntennaContext);
	const product = languageData.products.wire.redFed[type];
	const common = languageData.products.common;

	const img = {
		RFMinishort: RFMinishort,
		RFMinilong: RFMinilong,
		RFMinimax: RFMinimax,
		RFMidishort: RFMidishort,
		RFMidilong: RFMidilong,
		RFHDshort: RFHDshort,
		RFHDlong: RFHDlong,
		RFStandardshort: RFStandardshort,
		RFStandardlong: RFStandardlong,
	};

	return (
		<ProductPageStyled>
			<div className='wrapper'>
				<div className='selectorkWrapper'>
					<img src={img[type + size]} alt={product.model} />
					<aside>
						<h2>{product[size].model}</h2>
						<VaraintPanel />
						<p>
							{size === "max"
								? product.max.description
								: product.description}
						</p>
						<div className='linkWrapper'>
							<a href={product[size].storeLink}>
								{common.linkTitle}
							</a>
						</div>
					</aside>
				</div>

				<ul>
					<li className='description'>
						<h3>{common.bandsTitle}</h3>
						<p>{product[size].bands}</p>
					</li>
					<li className='description'>
						<h3>{common.spanTitle}</h3>
						<p>{product[size].span}</p>
					</li>
					<li className='description'>
						<h3>{common.weightTitle}</h3>
						<p>{product[size].weight}</p>
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
