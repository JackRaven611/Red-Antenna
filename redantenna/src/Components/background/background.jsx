import { BackgroundStyled } from ".";
import { ImgFadeStyled } from "../imgFade/index";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import backgroundImg from "../../img/RedFed zbiorcze 1.JPG";

export const Background = () => {
	const { languageData } = useContext(LanguageContext);
	return (
		<BackgroundStyled>
			<img src={backgroundImg} alt='Background Antennas' />
			<ImgFadeStyled />
			<header>
				<h1>{languageData.header}</h1>
				<h3>{languageData.headerP}</h3>
			</header>
		</BackgroundStyled>
	);
};
