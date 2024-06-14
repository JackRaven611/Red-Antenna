import { CatalogStyled } from ".";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { AntennaContext } from "../productPage/antennaProvider";
import { Product } from "./product/product";
import RFMinilong from "../../img/mini80.jpg";
import tuner from "../../img/mini Tuner.jpg";
import redLine from "../../img/redLine.jpg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Catalog = ({ type }) => {
	const { languageData } = useContext(LanguageContext);
	const { setType, setSize } = useContext(AntennaContext);

	useEffect(() => {
		setType("standard");
		setSize("long");
	}, []);

	const wire = (
		<>
			<li className='headerWrapper'>
				<h2>{languageData.products.wire.common.title}</h2>
				<p>{languageData.products.wire.common.description}</p>
			</li>
			<li>
				<Product
					type='wire'
					series='redFed'
					link='/products/wire/redFed'
					image={RFMinilong}
				/>
				<Product
					type='wire'
					series='redDipole'
					link='/products/wire/redDipole'
					image={RFMinilong}
				/>
				<Product
					type='wire'
					series='redWire'
					link='/products/wire/redWire'
					image={RFMinilong}
				/>
			</li>
		</>
	);

	const vertical = (
		<>
			<li className='headerWrapper'>
				<h2>{languageData.products.vertical.common.title}</h2>
				<p>{languageData.products.vertical.common.description}</p>
			</li>
			<li>
				<Product
					type='vertical'
					series='b1000'
					link='/products/vertical/b1000'
					image={RFMinilong}
				/>
				<Product
					type='vertical'
					series='p2000'
					link='/products/vertical/p2000'
					image={RFMinilong}
				/>
				<Product
					type='vertical'
					series='v3000'
					link='/products/vertical/v3000'
					image={RFMinilong}
				/>
			</li>
		</>
	);

	const accessories = (
		<>
			<li className='headerWrapper'>
				<h2>{languageData.products.accessories.common.title}</h2>
				<p>{languageData.products.accessories.common.description}</p>
			</li>
			<li>
				<Product
					type='accessories'
					series='miniTuner'
					link='/products/accessories/miniTuner'
					image={tuner}
				/>
				<Product
					type='accessories'
					series='redChoke'
					link='/products/accessories/redChoke'
					image={tuner}
				/>
				<Product
					type='accessories'
					series='redMount'
					link='/products/accessories/redMount'
					image={tuner}
				/>
				<Product
					type='accessories'
					series='redCon'
					link='/products/accessories/redCon'
					image={tuner}
				/>
				<Product
					type='accessories'
					series='redLine'
					link='/products/accessories/redLine'
					image={redLine}
				/>
			</li>
		</>
	);

	const handleType = () => {
		if (type === "wire") {
			return <>{wire}</>;
		} else if (type === "vertical") {
			return (
				<>
					<li className='headerWrapper'>
						<h2>{languageData.products.vertical.common.title}</h2>
						<p>
							{languageData.products.vertical.common.description}
						</p>
					</li>
					<li className='placeHolder'>
						<h3>Pojawią się już niedługo</h3>
					</li>
				</>
			);
		} else if (type === "accessories") {
			return accessories;
		} else {
			return (
				<>
					{wire}
					<li className='headerWrapper'>
						<h2>{languageData.products.vertical.common.title}</h2>
						<p>
							{languageData.products.vertical.common.description}
						</p>
					</li>
					<li className='placeHolder'>
						<h3>Pojawią się już niedługo</h3>
					</li>
					{accessories}
				</>
			);
		}
	};

	return (
		<CatalogStyled>
			<ul>{handleType()}</ul>
		</CatalogStyled>
	);
};
