import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import RFMinilong from "../../img/endfed MINI.webp";
import RFMiniMax from "../../img/endfed MAX.webp";
import RFMidilong from "../../img/endfed MIDI.webp";
import RFStandard from "../../img/endfed STD.webp";
import RFHDlong from "../../img/endfed HD.webp";
import RFExtremeshort from "../../img/endfed extreme bez cewki.webp";
import RFExtremelong from "../../img/endfed extreme.webp";
import RWMinilong from "../../img/wire MINI 02.webp";
import RWMidilong from "../../img/wire MIDI 02.webp";
import RWStandard from "../../img/wire STD.webp";
import RWHD from "../../img/wire HD.webp";
import RWHDPlus from "../../img/wire HDPlus.webp";
import RDMini from "../../img/dipol MINI.webp";
import RDMidi from "../../img/dipol MIDI.webp";
import RDStandard from "../../img/dipol STD.webp";
import RDHD from "../../img/dipol HD.webp";
import RDHDPlus from "../../img/dipol HDPlus.webp";
import RV12ATU from "../../img/RedVert12ATU.webp";
import RV12BAL from "../../img/RedVert12BAL.webp";
import RVBATU from "../../img/RedVertBaseATU.webp";
import RVBBAL from "../../img/RedVertBaseBAL.webp";
import RVTS from "../../img/RedVertTurnStile.webp";
import miniTunershort from "../../img/mini-tuner 02.webp";
import miniTunerlong from "../../img/mini-tuner.webp";
import redChoke from "../../img/choke balun 02.webp";
import redMount from "../../img/szpila.webp";
import redConLong from "../../img/zestaw 01.webp";
import redConMid from "../../img/zestaw 03.webp";
import redConShort from "../../img/zestaw 02.webp";
import redLine from "../../img/red kabel 01.webp";

// Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com

export const ProductImg = ({ series, type, size }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products[series]?.[type];
	const [imageSrc, setImageSrc] = useState(null);

	const wireImages = {
		redFed: {
			mini: { short: RFMinilong, long: RFMinilong, max: RFMiniMax },
			midi: { short: RFMidilong, long: RFMidilong },
			standard: { short: RFStandard, long: RFStandard },
			hd: { short: RFHDlong, long: RFHDlong },
			extreme: { short: RFExtremeshort, long: RFExtremelong },
		},
		redDipole: {
			mini: RDMini,
			midi: RDMidi,
			standard: RDStandard,
			hd: RDHD,
			hd600: RDHDPlus,
			hd1500: RDHDPlus,
		},
		redWire: {
			mini: { short: RWMinilong, long: RWMinilong },
			midi: { short: RWMidilong, long: RWMidilong },
			standard: { short: RWStandard, long: RWStandard },
			hd: { short: RWHD, long: RWHD },
			hd600: { short: RWHDPlus, long: RWHDPlus },
			hd1500: { short: RWHDPlus, long: RWHDPlus },
		},
	};

	const verticalImages = {
		redVert12: { short: RV12BAL, long: RV12ATU },
		redVertBase: { short: RVBBAL, long: RVBATU },
		redVertTurnStile: { short: RVTS, long: RVTS },
	};

	const accessoryImages = {
		miniTuner: { short: miniTunershort, long: miniTunerlong },
		redCon: { short: redConShort, mid: redConMid, long: redConLong },
		redChoke,
		redMount,
		redLine,
	};

	useEffect(() => {
		const resolvedImage = (() => {
			switch (series) {
				case "redFed":
					return wireImages[series]?.[type]?.[size];
				case "redWire":
					return wireImages[series]?.[type]?.[size];
				case "redDipole":
					return wireImages[series]?.[type];
				case "redVert12":
					return verticalImages[series]?.[size];
				case "redVertBase":
					return verticalImages[series]?.[size];
				case "redVertTurnStile":
					return verticalImages[series]?.[size];
				case "miniTuner":
					return (
						accessoryImages[series]?.[size] ||
						accessoryImages[series]
					);
				case "redCon":
					return (
						accessoryImages[series]?.[size] ||
						accessoryImages[series]
					);
				case "redChoke":
					return (
						accessoryImages[series]?.[size] ||
						accessoryImages[series]
					);
				case "redMount":
					return (
						accessoryImages[series]?.[size] ||
						accessoryImages[series]
					);
				case "redLine":
					return (
						accessoryImages[series]?.[size] ||
						accessoryImages[series]
					);
				default:
					return null;
			}
		})();

		setImageSrc(resolvedImage);
	}, [series, type, size]);

	return (
		<img
			src={imageSrc}
			alt={product?.model || `${series} antenna`}
			loading='lazy'
		/>
	);
};
