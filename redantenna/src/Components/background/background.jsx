import { BackgroundStyled } from ".";
import { ImgFadeStyled } from "../imgFade/index";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import backgroundImg from "../../img/RedFed zbiorcze 1.JPG";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Background = () => {
	const { languageData } = useContext(LanguageContext);
	const main = languageData.main;

	return (
		<BackgroundStyled>
			<img src={backgroundImg} alt='Background Antennas' loading='lazy' />
			<ImgFadeStyled />
			<header>
				<h1>{main.header}</h1>
				<h3>{main.headerP}</h3>
			</header>
		</BackgroundStyled>
	);
};
