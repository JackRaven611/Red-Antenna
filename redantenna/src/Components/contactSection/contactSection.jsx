import { ContactSectionStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import qrpMini from "../../img/RedFed QRP mini.JPG";

export const ContactSection = () => {
	const { languageData } = useContext(LanguageContext);
	return (
		<ContactSectionStyled>
			<article>
				<div>
					<img src={qrpMini} alt='red antenna logo' />
				</div>
				<div>
					<h2>{languageData.footer.titleContact}</h2>
					<p>{languageData.footer.about}</p>
				</div>
			</article>
		</ContactSectionStyled>
	);
};
