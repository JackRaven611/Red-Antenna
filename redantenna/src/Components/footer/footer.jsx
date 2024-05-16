import { FooterStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import phoneIcon from "../../img/phone.svg";
import emailIcon from "../../img/email.svg";
import pinIcon from "../../img/pin.svg";

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
						<h5 className='footerTextColor'>{footer.titleStore}</h5>
						<p className='footerTextColor'>{footer.ourStore}</p>
						<div className='hours'>
							<p className='footerTextColor'>{footer.open}</p>
							<p className='footerTextColor'>{footer.hours}</p>
						</div>
						<a href={footer.location} className='adress'>
							<img src={pinIcon} alt='pin' />
							<div>
								<p className='footerTextColor'>
									{footer.street}
								</p>
								<div>
									<p className='footerTextColor'>
										{footer.postCode}
									</p>
									<p className='footerTextColor'>
										{footer.city}
									</p>
								</div>
							</div>
						</a>
						<p className='footerTextColor'>{footer.country}</p>
					</div>
				</li>
			</ul>
		</FooterStyled>
	);
};
