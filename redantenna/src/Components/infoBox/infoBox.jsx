import { InfoBoxStyled } from ".";
import { BoxArticle } from "./boxArticle/boxArticle";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import baluny from "../../img/baluny prototypy 2.JPG";
import cewka from "../../img/cewka EndFed HD prototyp.JPG";
import redfed from "../../img/RedFed QRP mini 40-10 2.JPG";

export const InfoBox = () => {
	const { languageData } = useContext(LanguageContext);

	return (
		<InfoBoxStyled>
			<div>
				<BoxArticle
					imgUrl={cewka}
					articleText={languageData.handmadeText}
					articleTitle={languageData.handmadeTitle}
				></BoxArticle>
				<BoxArticle
					imgUrl={baluny}
					articleText={languageData.design}
					articleTitle={languageData.designTitle}
				></BoxArticle>
				<BoxArticle
					imgUrl={redfed}
					articleText={languageData.effectiveness}
					articleTitle={languageData.effectivenessTitle}
				></BoxArticle>
			</div>
		</InfoBoxStyled>
	);
};
