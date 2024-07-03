import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../languageChange/languageContext";
import { ProductPageStyled } from "../productPageWire";
import { VaraintAcc } from "./variantAcc";
import { AccImg } from "./accImg";
import { RedCon } from "./redCon";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPageAcc = ({ series, size }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products.accessories[series];
	const common = languageData.products.common;

	return (
		<ProductPageStyled>
			<div className='wrapper'>
				<div className='selectorkWrapper'>
					<AccImg series={series} size={size} />
					<aside>
						<h2>
							{product[size]
								? product[size].model
								: product.common.series}
						</h2>
						{<VaraintAcc series={series} />}
						<p>
							{product[size]
								? product[size].description
								: product.common.descriptionPage}
						</p>
						<div className='linkWrapper'>
							{languageData.common.pl ? (
								<a
									target='_blank'
									rel='noopener noreferrer'
									href={
										product[size]
											? product[size].storeLink
											: product.common.storeLink
									}
								>
									{common.linkTitle}
								</a>
							) : (
								<Link
									to={
										product[size]
											? product[size].storeLink
											: product.common.storeLink
									}
								>
									{common.linkTitle}
								</Link>
							)}
						</div>
					</aside>
				</div>
				{series === "redCon" ? (
					<RedCon series={series} size={size} />
				) : null}
			</div>
		</ProductPageStyled>
	);
};
