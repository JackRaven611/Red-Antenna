import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import miniTuner from "../../../img/mini Tuner.jpg";
import redChoke from "../../../img/redChoke.jpg";
import redMount from "../../../img/redMount.jpg";
import redConshort from "../../../img/redCon02.jpg";
import redConlong from "../../../img/redCon01.jpg";
import redLine from "../../../img/redLine.jpg";
import placeHolder from "../../../img/red-antenna logo.jpg";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AccImg = ({ series, size }) => {
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products.accessories[series];

	const acc = {
		miniTunershort: miniTuner,
		miniTunerlong: miniTuner,
		// redChoke: redChoke,
		// redMount: redMount,
		// redConshort: redConshort,
		// redConlong: redConlong,
		redLine: redLine,
		miniTunershort: placeHolder,
		miniTunerlong: placeHolder,
		redChoke: placeHolder,
		redMount: placeHolder,
		redConshort: placeHolder,
		redConlong: placeHolder,
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
