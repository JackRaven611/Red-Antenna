import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import RFMinishort from "../../../img/mini40.jpg";
import RFMinilong from "../../../img/mini80.jpg";
import RFMinimax from "../../../img/miniMax.jpg";
import RFMidishort from "../../../img/midi40.jpg";
import RFMidilong from "../../../img/midi80.jpg";
import RFHDshort from "../../../img/hd40.jpg";
import RFHDlong from "../../../img/hd80.jpg";
import RFStandardshort from "../../../img/standard40.jpg";
import RFStandardlong from "../../../img/standard80.jpg";
import RFExtremeshort from "../../../img/RFExtreme.jpg";
import RFExtremelong from "../../../img/RFExtremefull.jpg";
import placeHolder from "../../../img/red-antenna logo.jpg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AntennaImg = ({ series, type, size }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products.wire[series][type];

	const redFed = {
		minishort: RFMinishort,
		minilong: RFMinilong,
		minimax: RFMinimax,
		midishort: RFMidishort,
		midilong: RFMidilong,
		standardshort: RFStandardshort,
		standardlong: RFStandardlong,
		hdshort: RFHDshort,
		hdlong: RFHDlong,
		extremeshort: RFExtremeshort,
		extremelong: RFExtremelong,
	};

	const redDipole = {
		// mini: RFMinishort,
		// midi: RFMidishort,
		// standard: RFStandardshort,
		// hd: RFHDshort,
		// hd600: RFExtremeshort,
		// hd1500: RFExtremelong,
		mini: placeHolder,
		midi: placeHolder,
		standard: placeHolder,
		hd: placeHolder,
		hd600: placeHolder,
		hd1500: placeHolder,
	};

	const redWire = {
		// minishort: RFMinishort,
		// minilong: RFMinilong,
		// midishort: RFMidishort,
		// midilong: RFMidilong,
		// standardshort: RFStandardshort,
		// standardlong: RFStandardlong,
		// hdshort: RFHDshort,
		// hdlong: RFHDlong,
		// hd600short: RFExtremeshort,
		// hd600long: RFExtremeshort,
		// hd1500short: RFExtremelong,
		// hd1500long: RFExtremelong,
		minishort: placeHolder,
		minilong: placeHolder,
		midishort: placeHolder,
		midilong: placeHolder,
		standardshort: placeHolder,
		standardlong: placeHolder,
		hdshort: placeHolder,
		hdlong: placeHolder,
		hd600short: placeHolder,
		hd600long: placeHolder,
		hd1500short: placeHolder,
		hd1500long: placeHolder,
	};

	const img = () => {
		if (series === "redFed") {
			return redFed[type + size];
		} else if (series === "redDipole") {
			return redDipole[type];
		} else {
			return redWire[type + size];
		}
	};

	return <img src={img()} alt={product.model} loading='lazy' />;
};
