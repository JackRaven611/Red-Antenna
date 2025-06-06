import { ProductPage } from "../productPage/productPage";
import { useContext } from "react";
import { AntennaContext } from "../productPage/antennaProvider";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPanel = ({ series }) => {
	const { type, size } = useContext(AntennaContext);

	return <ProductPage type={type} size={size} series={series} />;
};
