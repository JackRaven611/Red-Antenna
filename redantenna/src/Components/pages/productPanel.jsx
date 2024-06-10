import { ProductPageRF } from "../productPage/productPageRF/productPageRF";
import { useContext } from "react";
import { AntennaContext } from "../productPage/antennaProvider";

export const ProductPanel = ({ series }) => {
	const { type, size } = useContext(AntennaContext);
	return <ProductPageRF type={type} size={size} series={series} />;
};
