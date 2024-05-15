import { CatalogStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { Product } from "./product/product";
import RFMini40 from "../../img/RedFed QRP mini 40-10 2.JPG";
import RFMidi40 from "../../img/RedFed QRP 40-10.JPG";
import RFHD80 from "../../img/RedFed HD 80-10.JPG";
import RFStandard from "../../img/RedFed Standard.JPG";
import RFMini80Max from "../../img/Red-Fed Mini 80 Max.jpg";

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
					<Product type='wire' id='RFHD80' image={RFHD80} />
					<Product type='wire' id='RFHD40' image={RFHD80} />
					<Product type='wire' id='RFStandard80' image={RFStandard} />
					<Product type='wire' id='RFStandard40' image={RFStandard} />
					<Product type='wire' id='RFMidi80' image={RFMidi40} />
					<Product type='wire' id='RFMidi40' image={RFMidi40} />
					<Product type='wire' id='RFMini80' image={RFMini40} />
					<Product type='wire' id='RFMini40' image={RFMini40} />
					<Product type='wire' id='RFMini80Max' image={RFMini80Max} />
				</li>
				<li className='headerWrapper'>
					<h2>ANTENY PIONOWE</h2>
				</li>
				<li></li>
				<li></li>
				<li className='headerWrapper'>
					<h2>AKCESORIA</h2>
				</li>
				<li></li>
			</ul>
		</CatalogStyled>
	);
};
