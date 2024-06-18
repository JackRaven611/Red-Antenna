import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import { ProductPageStyled } from "../productPageWire";
import { VaraintAcc } from "./variantAcc";
import { AccImg } from "./accImg";

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
						</div>
					</aside>
				</div>
				{series === "redCon" ? (
					<>
						<h3 className='redConTitle'>
							{product.common.connectorsTitle}
						</h3>
						<ul className='redCon'>
							{product[size].connectors.map((connector) => (
								<li key={connector}>
									<p>{connector}</p>
								</li>
							))}
						</ul>
					</>
				) : null}
			</div>
		</ProductPageStyled>
	);
};
