import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../languageChange/languageContext";

export const RedCon = ({ size, series }) => {
	const { languageData } = useContext(LanguageContext);
	const [redCon, setRedCon] = useState();
	const product = languageData.products.accessories[series];

	useEffect(() => {
		setRedCon(
			product[size].connectors.map((connector, index) => (
				<li key={index}>
					<p>{connector}</p>
				</li>
			))
		);
	}, [size, languageData.common.pl]);

	return (
		<>
			<h3 className='redConTitle'>{product.common.connectorsTitle}</h3>
			<ul className='redCon'>{redCon}</ul>
		</>
	);
};
