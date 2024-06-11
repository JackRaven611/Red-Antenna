import { ProductPage } from "../productPage/productPage/productPage";
import { useContext } from "react";
import { AntennaContext } from "../productPage/antennaProvider";

export const ProductPanel = ({ series }) => {
	const { type, size } = useContext(AntennaContext);
	return <ProductPage type={type} size={size} series={series} />;
};
