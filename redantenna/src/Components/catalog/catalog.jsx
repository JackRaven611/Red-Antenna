import { CatalogStyled } from ".";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { AntennaContext } from "../productPage/antennaProvider";
import { Product } from "./product/product";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import RF from "../../img/endfed MINI.webp";
import RW from "../../img/wire MIDI 02.webp";
import RD from "../../img/dipol STD.webp";
import tuner from "../../img/mini-tuner 02.webp";
import redLine from "../../img/red kabel 01.webp";
import redChoke from "../../img/choke balun 02.webp";
import redMount from "../../img/szpila.webp";
import redCon from "../../img/zestaw 01.webp";
import placeHolder from "../../img/red-antenna logo.jpg";

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
					link='/products/wire/redFed#'
					image={RF}
				/>
				<Product
					type='wire'
					series='redDipole'
					link='/products/wire/redDipole#'
					image={RD}
				/>
				<Product
					type='wire'
					series='redWire'
					link='/products/wire/redWire#'
					image={RW}
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
					link='/products/vertical/b1000#'
					image={placeHolder}
				/>
				<Product
					type='vertical'
					series='p2000'
					link='/products/vertical/p2000#'
					image={placeHolder}
				/>
				<Product
					type='vertical'
					series='v3000'
					link='/products/vertical/v3000#'
					image={placeHolder}
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
					link='/products/accessories/miniTuner#'
					image={tuner}
				/>
				<Product
					type='accessories'
					series='redChoke'
					link='/products/accessories/redChoke#'
					image={redChoke}
				/>
				<Product
					type='accessories'
					series='redMount'
					link='/products/accessories/redMount#'
					image={redMount}
				/>
				<Product
					type='accessories'
					series='redCon'
					link='/products/accessories/redCon#'
					image={redCon}
				/>
				<Product
					type='accessories'
					series='redLine'
					link='/products/accessories/redLine#'
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
						<h3>{languageData.common.placeHolder}</h3>
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
						<h3>{languageData.common.placeHolder}</h3>
					</li>
					{accessories}
				</>
			);
		}
	};

	const handleBreadcrumbs = () => {
		if (type === "wire") {
			return [
				{
					link: "/products#",
					name: languageData.breadcrumbs.products,
				},
				{
					link: "",
					name: languageData.breadcrumbs.wire,
				},
			];
		} else if (type === "vertical") {
			return [
				{
					link: "/products#",
					name: languageData.breadcrumbs.products,
				},
				{
					link: "",
					name: languageData.breadcrumbs.vertical,
				},
			];
		} else if (type === "accessories") {
			return [
				{
					link: "/products#",
					name: languageData.breadcrumbs.products,
				},
				{
					link: "",
					name: languageData.breadcrumbs.accessories,
				},
			];
		} else {
			return [
				{
					link: "",
					name: languageData.breadcrumbs.products,
				},
			];
		}
	};

	return (
		<>
			<Breadcrumbs paths={handleBreadcrumbs()} />
			<CatalogStyled>
				<ul>{handleType()}</ul>
			</CatalogStyled>
		</>
	);
};
