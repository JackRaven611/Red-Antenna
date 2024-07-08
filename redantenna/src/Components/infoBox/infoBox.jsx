import { InfoBoxStyled } from ".";
import { BoxArticle } from "./boxArticle/boxArticle";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import baluny from "../../img/baluny prototypy 2.webp";
import cewka from "../../img/cewka EndFed HD prototyp.webp";
import redfed from "../../img/RedFed mini background.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

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
