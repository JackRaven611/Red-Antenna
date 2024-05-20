import { FooterStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import phoneIcon from "../../img/phone.svg";
import emailIcon from "../../img/email.svg";

export const Footer = () => {
	const { languageData } = useContext(LanguageContext);
	const footer = languageData.footer;
	return (
		<FooterStyled>
			<ul>
				<li>
					<h5 className='footerTextColor'>{footer.titleAbout}</h5>
					<p className='footerTextColor'>{footer.about}</p>
				</li>
				<li className='contactWrapper'>
					<div>
						<h5 className='footerTextColor'>
							{footer.titleContact}
						</h5>
						<div className='contactIcon'>
							<img src={phoneIcon} alt='phone' />
							<p className='footerTextColor'>
								{footer.phoneMain}
							</p>
						</div>
						<div className='contactIcon'>
							<img src={phoneIcon} alt='phone' />
							<p className='footerTextColor'>{footer.phoneSec}</p>
						</div>
						<div className='contactIcon'>
							<img src={emailIcon} alt='email' />
							<p className='footerTextColor'>{footer.email}</p>
						</div>
					</div>
					<div>
						<h5 className='footerTextColor'>{footer.ourStore}</h5>

						<p className='footerTextColor'>{footer.open}</p>
						<a href={footer.location} className='adress'>
							<p className='footerTextColor'>
								{footer.storeLocation}
							</p>
						</a>
						<p className='footerTextColor'>{footer.country}</p>
					</div>
				</li>
			</ul>
		</FooterStyled>
	);
};
