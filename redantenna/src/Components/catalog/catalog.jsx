import { CatalogStyled } from ".";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { AntennaContext } from "../productPage/antennaProvider";
import { Product } from "./product/product";
import { ProductAccessories } from "./product/productAccessories";
import RFMinilong from "../../img/mini80.jpg";
import tuner from "../../img/mini Tuner.jpg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Catalog = () => {
	const { languageData } = useContext(LanguageContext);
	const { setType, setSize } = useContext(AntennaContext);

	useEffect(() => {
		setType("standard");
		setSize("long");
	}, []);

	return (
		<CatalogStyled>
			<ul>
				<li className='headerWrapper'>
					<h2>{languageData.products.wire.common.title}</h2>
					<p>{languageData.products.wire.common.description}</p>
				</li>
				<li>
					<Product
						type='wire'
						series='redFed'
						link='/products/redFed'
						image={RFMinilong}
					/>
					<Product
						type='wire'
						series='redDipole'
						link='/products/redDipole'
						image={RFMinilong}
					/>
					<Product
						type='wire'
						series='redWire'
						link='/products/redWire'
						image={RFMinilong}
					/>
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
				<li>
					<Product
						type='accessories'
						series='MiniTuner'
						link='/products/accesories'
						image={tuner}
					/>
				</li>
			</ul>
		</CatalogStyled>
	);
};
