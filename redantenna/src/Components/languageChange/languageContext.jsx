import React, { createContext, useState, useEffect } from "react";
import { TEXTS } from "../../Consts/Content";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [selectedLanguage, setSelectedLanguage] = useState("polish");
	const textLanguage = TEXTS[selectedLanguage];
	const [languageData, setLanguageData] = useState(textLanguage);

	useEffect(() => {
		setLanguageData(textLanguage);
	}, [textLanguage]);

	return (
		<LanguageContext.Provider
			value={{ selectedLanguage, setSelectedLanguage, languageData }}
		>
			{children}
		</LanguageContext.Provider>
	);
};
