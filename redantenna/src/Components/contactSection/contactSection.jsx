import { ContactSectionStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import hd80 from "../../img/RedFed HD 80-10.JPG";

export const ContactSection = () => {
	const { languageData } = useContext(LanguageContext);
	return (
		<ContactSectionStyled>
			<article>
				<img src={hd80} alt='red antenna hd' />

				<div>
					<h2>{languageData.footer.titleContact}</h2>
					<ul>
						<li className='adress'>
							<h4>{languageData.footer.ourStore}:</h4>
							<a href={languageData.footer.location}>
								<p>{languageData.footer.storeLocation}</p>
							</a>
						</li>
						<li>
							<h4>{languageData.footer.hoursTitle}:</h4>
							<p>{languageData.footer.open}</p>
						</li>
						<li>
							<h4>{languageData.footer.emailTitle}:</h4>
							<p>{languageData.footer.email}</p>
						</li>
						<li>
							<h4>{languageData.footer.phoneMainTitle}:</h4>
							<p>{languageData.footer.phoneMain}</p>
						</li>
						<li>
							<h4>{languageData.footer.phoneServiceTitle}:</h4>
							<p>{languageData.footer.phoneService}</p>
						</li>
						<li>
							<h4>{languageData.footer.phoneSecTitle}:</h4>
							<p>{languageData.footer.phoneSec}</p>
						</li>
						<li>
							<h4>{languageData.contactSection.formTitle}:</h4>
							<a href={languageData.contactSection.formLink}>
								<p>{languageData.contactSection.form}</p>
							</a>
						</li>
					</ul>
				</div>
			</article>
		</ContactSectionStyled>
	);
};
