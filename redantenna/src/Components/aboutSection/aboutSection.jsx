import { AboutSectionStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import baluny from "../../img/baluny prototypy 2.JPG";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutSection = () => {
	const { languageData } = useContext(LanguageContext);
	const aboutSection = languageData.aboutSection;
	return (
		<AboutSectionStyled>
			<article>
				<img src={baluny} alt='baluny' loading='lazy' />
				<div>
					<h2>{aboutSection.title}</h2>
					<p>{aboutSection.text}</p>
					<p>{aboutSection.wsrp}</p>
				</div>
			</article>
		</AboutSectionStyled>
	);
};
