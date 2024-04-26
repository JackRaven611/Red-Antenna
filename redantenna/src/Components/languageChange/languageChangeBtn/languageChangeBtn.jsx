import { LanguageChangeBtnStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageContext";

export const LanguageChangeBtn = () => {
	const { selectedLanguage, languageData, setSelectedLanguage } =
		useContext(LanguageContext);
	const languages = [
		{ code: "en", name: "english" },
		{ code: "pl", name: "polish" },
	];

	const handleLanguageChange = (event) => {
		setSelectedLanguage(event.target.value);
	};

	return (
		<LanguageChangeBtnStyled
			value={selectedLanguage}
			onChange={handleLanguageChange}
		>
			{languages.map((language) => (
				<option key={language.code} value={language.name}>
					{languageData[language.code]}
				</option>
			))}
		</LanguageChangeBtnStyled>
	);
};
