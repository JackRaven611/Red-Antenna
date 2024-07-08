import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";

import RFMinilong from "../../../img/endfed MINI.webp";
import RFMiniMax from "../../../img/endfed MAX.webp";
import RFMidilong from "../../../img/endfed MIDI.webp";
import RFStandard from "../../../img/endfed STD.webp";
import RFHDlong from "../../../img/endfed HD.webp";
import RFExtremeshort from "../../../img/endfed extreme bez cewki.webp";
import RFExtremelong from "../../../img/endfed extreme.webp";

import RWMinilong from "../../../img/wire MINI 02.webp";
import RWMidilong from "../../../img/wire MIDI 02.webp";
import RWStandard from "../../../img/wire STD.webp";
import RWHD from "../../../img/wire HD.webp";
import RWHDPlus from "../../../img/wire HDPlus.webp";

import RDMini from "../../../img/dipol MINI.webp";
import RDMidi from "../../../img/dipol MIDI.webp";
import RDStandard from "../../../img/dipol STD.webp";
import RDHD from "../../../img/dipol HD.webp";
import RDHDPlus from "../../../img/dipol HDPlus.webp";
import placeHolder from "../../../img/red-antenna logo.jpg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AntennaImg = ({ series, type, size }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products.wire[series][type];

	const redFed = {
		minishort: RFMinilong,
		minilong: RFMinilong,
		minimax: RFMiniMax,
		midishort: RFMidilong,
		midilong: RFMidilong,
		standardshort: RFStandard,
		standardlong: RFStandard,
		hdshort: RFHDlong,
		hdlong: RFHDlong,
		extremeshort: RFExtremeshort,
		extremelong: RFExtremelong,
	};

	const redDipole = {
		mini: RDMini,
		midi: RDMidi,
		standard: RDStandard,
		hd: RDHD,
		hd600: RDHDPlus,
		hd1500: RDHDPlus,
	};

	const redWire = {
		minishort: RWMinilong,
		minilong: RWMinilong,
		midishort: RWMidilong,
		midilong: RWMidilong,
		standardshort: RWStandard,
		standardlong: RWStandard,
		hdshort: RWHD,
		hdlong: RWHD,
		hd600short: RWHDPlus,
		hd600long: RWHDPlus,
		hd1500short: RWHDPlus,
		hd1500long: RWHDPlus,
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
