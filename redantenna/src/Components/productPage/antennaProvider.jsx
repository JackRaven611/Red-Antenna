import { createContext, useEffect, useState } from "react";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AntennaContext = createContext();

export const AntennaProvider = ({ children }) => {
	const antennaSeries = "redFed";
	const antennaType = "standard";
	const antennaSize = "long";
	const [type, setType] = useState(antennaType);
	const [size, setSize] = useState(antennaSize);
	const [series, setSeries] = useState(antennaSeries);

	useEffect(() => {
		setType(type);
	}, [antennaType]);

	useEffect(() => {
		setSize(size);
	}, [antennaSize]);

	useEffect(() => {
		setSeries(series);
	}, [antennaSeries]);

	return (
		<AntennaContext.Provider
			value={{ type, setType, size, setSize, series, setSeries }}
		>
			{children}
		</AntennaContext.Provider>
	);
};
