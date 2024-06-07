import { AboutBoxStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import redFed from "../../img/RedFed Standard.JPG";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutBox = () => {
	const { languageData } = useContext(LanguageContext);
	const main = languageData.main;
	return (
		<AboutBoxStyled>
			<div>
				<img src={redFed} alt='redFed antenna' loading='lazy' />
				<h2>{main.aboutTitle}</h2>
				<p>{main.aboutText}</p>
			</div>
		</AboutBoxStyled>
	);
};
