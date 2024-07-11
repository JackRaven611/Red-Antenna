import { AboutSectionStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import baluny from "../../img/baluny prototypy 2.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutSection = () => {
	const { languageData } = useContext(LanguageContext);
	const aboutSection = languageData.aboutSection;
	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "",
						name: `${languageData.breadcrumbs.about}`,
					},
				]}
			/>
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
		</>
	);
};
