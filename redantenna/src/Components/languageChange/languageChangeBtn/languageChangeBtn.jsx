import { LanguageChangeBtnStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageContext";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const LanguageChangeBtn = () => {
	const context = useContext(LanguageContext);
	const languages = [
		{ code: "en", name: "english" },
		{ code: "pl", name: "polish" },
	];

	const handleLanguageChange = (event) => {
		context.setSelectedLanguage(event.target.value);
	};

	return (
		<LanguageChangeBtnStyled
			value={context.selectedLanguage}
			onChange={handleLanguageChange}
		>
			{languages.map((language) => (
				<option key={language.code} value={language.name}>
					{context.languageData[language.code]}
				</option>
			))}
		</LanguageChangeBtnStyled>
	);
};
