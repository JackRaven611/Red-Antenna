import { FooterStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";

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
				<li>
					<h5 className='footerTextColor'>{footer.titleContact}</h5>
					<div>
						<img src='' alt='' />
						<p className='footerTextColor'>{footer.phoneMain}</p>
					</div>
					<div>
						<img src='' alt='' />
						<p className='footerTextColor'>{footer.phoneSec}</p>
					</div>
					<div>
						<img src='' alt='' />
						<p className='footerTextColor'>{footer.email}</p>
					</div>
				</li>
				<li>
					<h5 className='footerTextColor'>{footer.titleStore}</h5>
					<p className='footerTextColor'>{footer.ourStore}</p>
					<div>
						<p className='footerTextColor'>{footer.open}</p>
						<p className='footerTextColor'>{footer.hours}</p>
					</div>
					<p className='footerTextColor'>{footer.street}</p>
					<div>
						<p className='footerTextColor'>{footer.city}</p>
						<p className='footerTextColor'>{footer.postCode}</p>
					</div>
					<p className='footerTextColor'>{footer.country}</p>
				</li>
			</ul>
		</FooterStyled>
	);
};
