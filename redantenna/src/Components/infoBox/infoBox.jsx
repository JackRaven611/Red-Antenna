import { InfoBoxStyled } from ".";
import { BoxArticle } from "./boxArticle/boxArticle";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import baluny from "../../img/baluny prototypy 2.JPG";
import cewka from "../../img/cewka EndFed HD prototyp.JPG";
import redfed from "../../img/RedFed QRP mini 40-10 2.JPG";

export const InfoBox = () => {
	const { languageData } = useContext(LanguageContext);
	const main = languageData.main;

	return (
		<InfoBoxStyled>
			<div>
				<BoxArticle
					imgUrl={cewka}
					articleText={main.handmadeText}
					articleTitle={main.handmadeTitle}
				></BoxArticle>
				<BoxArticle
					imgUrl={baluny}
					articleText={main.designText}
					articleTitle={main.designTitle}
				></BoxArticle>
				<BoxArticle
					imgUrl={redfed}
					articleText={main.effectiveness}
					articleTitle={main.effectivenessTitle}
				></BoxArticle>
			</div>
		</InfoBoxStyled>
	);
};
