import { FooterStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import phoneIcon from "../../img/phone.svg";
import emailIcon from "../../img/email.svg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Footer = () => {
	const { languageData } = useContext(LanguageContext);
	const common = languageData.common;
	const footer = languageData.footer;
	return (
		<FooterStyled>
			<ul>
				<li>
					<h5 className='footerTextColor'>{footer.aboutTitle}</h5>
					<p className='footerTextColor'>{footer.about}</p>
				</li>
				<li className='contactWrapper'>
					<div>
						<h5 className='footerTextColor'>
							{footer.contactTitle}
						</h5>
						<div className='contactIcon'>
							<img src={phoneIcon} alt='phone' loading='lazy' />
							<p className='footerTextColor'>
								{common.phoneMain}
							</p>
						</div>
						<div className='contactIcon'>
							<img src={phoneIcon} alt='phone' loading='lazy' />
							<p className='footerTextColor'>
								{common.phoneService}
							</p>
						</div>
						<div className='contactIcon'>
							<img src={emailIcon} alt='email' loading='lazy' />
							<p className='footerTextColor'>{common.email}</p>
						</div>
					</div>
					<div>
						<h5 className='footerTextColor'>{common.storeTitle}</h5>

						<p className='footerTextColor'>{common.open}</p>
						<a
							href={common.location}
							className='adress'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p className='footerTextColor'>
								{common.storeLocation}
							</p>
						</a>
						<p className='footerTextColor'>{common.country}</p>
					</div>
				</li>
			</ul>
		</FooterStyled>
	);
};
