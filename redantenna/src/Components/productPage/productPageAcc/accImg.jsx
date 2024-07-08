import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import miniTunershort from "../../../img/mini-tuner 02.webp";
import miniTunerlong from "../../../img/mini-tuner.webp";
import redChoke from "../../../img/choke balun 02.webp";
import redMount from "../../../img/szpila.webp";
import redCon01 from "../../../img/zestaw 02.webp";
import redCon02 from "../../../img/zestaw 01.webp";
import redCon03 from "../../../img/zestaw 03.webp";
import redLine from "../../../img/red kabel 01.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AccImg = ({ series, size }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products.accessories[series];

	const acc = {
		miniTunershort: miniTunershort,
		miniTunerlong: miniTunerlong,
		redChoke: redChoke,
		redMount: redMount,
		redConmid: redCon03,
		redConshort: redCon02,
		redConlong: redCon01,
		redLine: redLine,
	};

	const img = () => {
		if (series === "miniTuner" || series === "redCon") {
			return acc[series + size];
		} else {
			return acc[series];
		}
	};

	return <img src={img()} alt={product.model} loading='lazy' />;
};
