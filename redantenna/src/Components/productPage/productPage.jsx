import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ProductPageStyled } from ".";
import { LanguageContext } from "../languageChange/languageContext";
import { VariantPanel } from "./variantPanel/variantPanel";
import { ProductImg } from "./ProductImg";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Carousel } from "../antennaCarousel/antennaCarousel";
import { RedCon } from "./productPageAcc/redCon";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPage = ({ series, type, size }) => {
	const { languageData } = useContext(LanguageContext);
	const [productType, setProductType] = useState(null);

	useEffect(() => {
		if (
			series === "redFed" ||
			series === "redDipole" ||
			series === "redWire"
		) {
			setProductType("wire");
		} else if (
			series === "redVert12" ||
			series === "redVertBase" ||
			series === "redVertTurnStile"
		) {
			setProductType("vertical");
		} else {
			setProductType("accessories");
		}
	}, [series, languageData]);

	if (!productType || !languageData) return null;

	const productData = languageData.products[productType]?.[series];
	const product =
		type && productData?.[type] ? productData[type] : productData;
	const common = languageData.products.common;

	const getModelName = () => {
		return (
			product?.[size]?.model ||
			product?.model ||
			product?.series ||
			product?.common?.series ||
			""
		);
	};

	const getProductLink = () => {
		return (
			product?.[size]?.storeLink ||
			product?.storeLink ||
			product?.common?.storeLink ||
			"#"
		);
	};

	const renderBreadcrumbs = () => {
		let pathName;
		switch (productType) {
			case "wire":
				pathName = languageData.breadcrumbs.wire;
				break;
			case "vertical":
				pathName = languageData.breadcrumbs.vertical;
				break;
			case "accessories":
				pathName = languageData.breadcrumbs.accessories;
				break;
			default:
				pathName = "";
		}

		return (
			<Breadcrumbs
				paths={[
					{
						link: "/products#",
						name: languageData.breadcrumbs.products,
					},
					{
						link: `/products/${productType}#`,
						name: pathName,
					},
					{
						link: "",
						name: getModelName(),
					},
				]}
			/>
		);
	};

	const renderCarousel = () => {
		if (productType !== "accessories") {
			return <Carousel series={series} />;
		} else return null;
	};

	const renderProductDetails = () => {
		if (productType === "wire") {
			return (
				<div className='infoWrapper'>
					<div>
						<h3>{productData?.common?.descriptionPageTitle}</h3>
						<p>
							{productData?.common?.descriptionPage}
							<br />
							<br />
							{common.disclaimer}
						</p>
					</div>
					<div>
						<h3>{common.techSpec}</h3>
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
			);
		} else if (productType === "vertical") {
			return (
				<div className='infoWrapper'>
					<div>
						<h3>{product?.series}</h3>
						<p>
							{product?.descriptionPage}
							<br />
							<br />
							{common.disclaimerVert}
						</p>
					</div>
					<div>
						<h3>{common.techSpec}</h3>
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
								<h3>{common.height}</h3>
								<p>{product.height}</p>
							</li>
							{product.folded ? (
								<li className='description'>
									<h3>{common.folded}</h3>
									<p>{product.folded}</p>
								</li>
							) : null}

							<li className='description'>
								<h3>{common.weightTitle}</h3>
								<p>
									{product[size]
										? product[size].weight
										: product.weight}
								</p>
							</li>
							<li className='description'>
								<h3>{common.swrTitle}</h3>
								<p>{product.swr}</p>
							</li>
							<li className='description'>
								<h3>{common.powerTitle}</h3>
								{series !== "redVertTurnStile" ? (
									<p>
										{product[size]
											? product[size].ssb
											: product.ssb}
										,{" "}
										{product[size]
											? product[size].cw
											: product.cw}
										,{" "}
										{product[size]
											? product[size].digi
											: product.digi}
									</p>
								) : (
									<p>
										{product[size]
											? product[size].power
											: product.power}
									</p>
								)}
							</li>
							<li className='description'>
								<h3>{common.connectors}</h3>
								<p>
									{product.feeder}, {product.antenna}
								</p>
							</li>
							{series !== "redVertTurnStile" ? (
								<li className='description'>
									<h3>{common.antBox}</h3>
									<p>
										{product[size]
											? product[size].antBox
											: product.AntBox}
									</p>
								</li>
							) : null}

							<li className='description'>
								<h3>{common.antennaWireTitle}</h3>
								<p>
									{product.antennaWire}
									{series !== "redVertBase" &&
									series !== "redVertTurnStile" ? (
										<sup>2</sup>
									) : null}
								</p>
							</li>
							<li className='description'>
								<h3>{common.rad}</h3>
								<p>{product.rad}</p>
							</li>
							<li className='description'>
								<h3>{common.mount}</h3>
								<p>{product.mount}</p>
							</li>
							<li className='description'>
								<h3>{common.kit}</h3>
								<p>
									{product[size]
										? product[size].kit
										: product.kit}
								</p>
							</li>
						</ul>
					</div>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<>
			{renderBreadcrumbs()}
			<ProductPageStyled>
				<div className='wrapper'>
					<div className='selectorkWrapper'>
						<ProductImg series={series} type={type} size={size} />
						<aside>
							<h2>{getModelName()}</h2>
							<VariantPanel series={series} />
							<div className='descriptionWrapper'>
								<p>
									{product?.[size]?.description ||
										product?.description ||
										product?.common.descriptionPage}
								</p>
								<div className='linkWrapper'>
									{languageData.common.pl ? (
										<a
											target='_blank'
											rel='noopener noreferrer'
											href={getProductLink()}
										>
											{common.linkTitle}
										</a>
									) : (
										<Link to={getProductLink()}>
											{common.linkTitle}
										</Link>
									)}
								</div>
							</div>
						</aside>
					</div>

					{renderProductDetails()}

					{series === "redCon" && (
						<RedCon series={series} size={size} />
					)}
					{renderCarousel()}
				</div>
			</ProductPageStyled>
		</>
	);
};
