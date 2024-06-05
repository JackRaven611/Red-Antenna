import { ContactSectionStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import hd80 from "../../img/RedFed HD 80-10.JPG";

export const ContactSection = () => {
	const { languageData } = useContext(LanguageContext);
	const common = languageData.common;
	const contact = languageData.contactSection;

	return (
		<ContactSectionStyled>
			<article>
				<img src={hd80} alt='red antenna hd' loading='lazy' />

				<div>
					<h2>{languageData.footer.contactTitle}</h2>
					<ul>
						<li className='adress'>
							<h3>{common.storeTitle}:</h3>
							<a href={common.location} target='_blank'>
								<p>{common.storeLocation}</p>
							</a>
						</li>
						<li>
							<h3>{common.hoursTitle}:</h3>
							<p>{common.open}</p>
						</li>
						<li>
							<h3>{common.emailTitle}:</h3>
							<p>{common.email}</p>
						</li>
						<li>
							<h3>{common.phoneMainTitle}:</h3>
							<p>{common.phoneMain}</p>
						</li>
						<li>
							<h3>{common.phoneServiceTitle}:</h3>
							<p>{common.phoneService}</p>
						</li>
						<li>
							<h3>{common.phoneSecTitle}:</h3>
							<p>{common.phoneSec}</p>
						</li>
						<li>
							<h3>{contact.formTitle}:</h3>
							<a href={contact.formLink} target='_blank'>
								<p>{contact.form}</p>
							</a>
						</li>
					</ul>
				</div>
			</article>
		</ContactSectionStyled>
	);
};
