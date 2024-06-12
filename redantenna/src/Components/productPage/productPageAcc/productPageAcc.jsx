import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import { ProductPageStyled } from "../productPageWire";

export const ProductPageAcc = ({ series, size }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products.accessories[series];
	const common = languageData.products.common;

	return (
		<ProductPageStyled>
			<div className='wrapper'>
				<div className='selectorkWrapper'>
					{/* <AntennaImg series={series} type={type} size={size} /> */}
					<aside>
						<h2>
							{product[size]
								? product[size].model
								: product.common.model}
						</h2>
						{/* <VaraintPanel series={series} /> */}
						<p>
							{product[size]
								? product[size].description
								: product.common.description}
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
			</div>
		</ProductPageStyled>
	);
};
