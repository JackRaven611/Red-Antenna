import { AboutBoxStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import redFed from "../../img/RedFed Standard.JPG";

export const AboutBox = () => {
	const { languageData } = useContext(LanguageContext);
	return (
		<AboutBoxStyled>
			<div>
				<img src={redFed} alt='redFed antenna' />
				<h2>{languageData.aboutTitle}</h2>
				<p>{languageData.aboutText}</p>
			</div>
		</AboutBoxStyled>
	);
};
