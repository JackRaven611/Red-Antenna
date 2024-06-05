import { useContext, createContext, useEffect, useState } from "react";
import { LanguageContext } from "../languageChange/languageContext";

export const AntennaContext = createContext();

export const AntennaProvider = ({ children }) => {
	const antennaType = "RFStandard";
	const antennaSize = "long";
	const [type, setType] = useState(antennaType);
	const [size, setSize] = useState(antennaSize);

	useEffect(() => {
		setType(type);
	}, [antennaType]);

	useEffect(() => {
		setSize(size);
	}, [antennaSize]);

	return (
		<AntennaContext.Provider value={{ type, setType, size, setSize }}>
			{children}
		</AntennaContext.Provider>
	);
};
