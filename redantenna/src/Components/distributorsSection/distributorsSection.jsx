import { useContext } from "react";
import { DistributorsSectionStyled } from ".";
import { LanguageContext } from "../languageChange/languageContext";
import ERcomER from "../../img/ercomer.png";
import Wimo from "../../img/Wimo.png";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const DistributorsSection = () => {
	const { languageData } = useContext(LanguageContext);

	const distributorsImg = {
		ERcomER: ERcomER,
		Wimo: Wimo,
	};

	return (
		<DistributorsSectionStyled>
			<h2>{languageData.common.distributorsTitle}</h2>
			<ul>
				{languageData.distributorCountries.map((country) => {
					return (
						<li key={country.name}>
							<h3>{country.name}</h3>
							<ul>
								{country.distributors.map((distributor) => {
									return (
										<li key={distributor.name}>
											<a
												href={distributor.url}
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													src={
														distributorsImg[
															distributor.name
														]
													}
													alt={distributor.name}
													loading='lazy'
												/>
											</a>
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</ul>
		</DistributorsSectionStyled>
	);
};
