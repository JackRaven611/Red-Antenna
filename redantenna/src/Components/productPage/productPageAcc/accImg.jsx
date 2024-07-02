import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import miniTunershort from "../../../img/mini-tuner 02.webp";
import miniTunerlong from "../../../img/mini-tuner.webp";
import redChoke from "../../../img/choke balun 02.webp";
import redMount from "../../../img/szpila.webp";
import redCon from "../../../img/zestaw 01.webp";
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
		redConshort: redCon,
		redConlong: redCon,
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
