import { CatalogStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { Product } from "./product/product";
import { ProductAccessories } from "./product/productAccessories";
import mini40 from "../../img/mini40.jpg";
import mini80 from "../../img/mini80.jpg";
import midi40 from "../../img/midi40.jpg";
import midi80 from "../../img/midi80.jpg";
import hd80 from "../../img/hd80.jpg";
import hd40 from "../../img/hd40.jpg";
import standard40 from "../../img/standard40.jpg";
import standard80 from "../../img/standard80.jpg";
import miniMax from "../../img/miniMax.jpg";
import tuner from "../../img/mini Tuner.jpg";

export const Catalog = () => {
	const { languageData } = useContext(LanguageContext);

	return (
		<CatalogStyled>
			<ul>
				<li className='headerWrapper'>
					<h2>ANTENY DRUTOWE</h2>
					<p>{languageData.products.wireText}</p>
				</li>
				<li className='wireAntennas'>
					<Product type='wire' id='RFHD' image={hd80} />
					{/* <Product type='wire' id='RFHD40' image={hd40} />
					<Product type='wire' id='RFStandard80' image={standard80} />
					<Product type='wire' id='RFStandard40' image={standard40} />
					<Product type='wire' id='RFMidi80' image={midi80} />
					<Product type='wire' id='RFMidi40' image={midi40} />
					<Product type='wire' id='RFMini80' image={mini80} />
					<Product type='wire' id='RFMini40' image={mini40} />
					<Product type='wire' id='RFMiniMax80' image={miniMax} /> */}
				</li>
				<li className='headerWrapper'>
					<h2>ANTENY PIONOWE</h2>
				</li>
				<li className='placeHolder'>
					<h3>Pojawią się już niedługo</h3>
				</li>
				<li></li>
				<li className='headerWrapper'>
					<h2>AKCESORIA</h2>
				</li>
				<li className='accessories'>
					<ProductAccessories
						type='accessories'
						id='MiniTunerCable'
						image={tuner}
					/>
					<ProductAccessories
						type='accessories'
						id='MiniTuner'
						image={tuner}
					/>
				</li>
			</ul>
		</CatalogStyled>
	);
};
