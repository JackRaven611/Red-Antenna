import React, { createContext, useState, useEffect } from "react";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const LanguageContext = createContext();

const defaultState = () => {
	return JSON.parse(localStorage.getItem("language"))
		? JSON.parse(localStorage.getItem("language"))
		: "polish";
};

export const LanguageProvider = ({ children }) => {
	const [selectedLanguage, setSelectedLanguage] = useState(defaultState());
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
