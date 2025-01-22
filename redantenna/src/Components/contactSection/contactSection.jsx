import { ContactSectionStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import hd80 from "../../img/RedFed mini background.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ContactSection = () => {
	const { languageData } = useContext(LanguageContext);
	const common = languageData.common;
	const contact = languageData.contactSection;

	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "",
						name: `${languageData.breadcrumbs.contact}`,
					},
				]}
			/>
			<ContactSectionStyled>
				<article>
					<img src={hd80} alt='red antenna hd' loading='lazy' />

					<div>
						<h2>{languageData.footer.contactTitle}</h2>
						<ul>
							<li className='adress'>
								<h3>{common.storeTitle}:</h3>
								<a
									href={common.location}
									target='_blank'
									rel='noopener noreferrer'
								>
									<p>{common.storeLocation}</p>
								</a>
							</li>
							<li>
								<h3>{common.emailTitle}:</h3>
								<p>{common.email}</p>
							</li>
							<li>
								<h3>{common.hoursTitle}:</h3>
								<p>{common.open}</p>
							</li>
							<li>
								<h3>{common.phoneMainTitle}:</h3>
								<p>{common.phoneMain}</p>
							</li>
							<li>
								<h3>{common.hoursService}:</h3>
								<p>{common.openService}</p>
							</li>

							<li>
								<h3>{common.phoneServiceTitle}:</h3>
								<p>{common.phoneService}</p>
							</li>

							<li>
								<h3>{contact.formTitle}:</h3>
								<a
									href={contact.formLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<p>{contact.form}</p>
								</a>
							</li>
						</ul>
					</div>
				</article>
			</ContactSectionStyled>
		</>
	);
};
