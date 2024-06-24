import { useContext } from "react";
import { DistributorsSectionStyled } from ".";
import { LanguageContext } from "../languageChange/languageContext";

export const DistributorsSection = () => {
	const { languageData } = useContext(LanguageContext);

	return (
		<DistributorsSectionStyled>
			<ul>
				{languageData.distributorCountries.map((country) => {
					return (
						<li key={country.name}>
							<h2>{country.name}</h2>
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
													src=''
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
