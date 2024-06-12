import { ProductPage } from "../productPage/productPageWire/productPage";
import { ProductPageAcc } from "../productPage/productPageAcc/productPageAcc";
import { useContext } from "react";
import { AntennaContext } from "../productPage/antennaProvider";

export const ProductPanel = ({ series }) => {
	const { type, size } = useContext(AntennaContext);

	const handleSeries = () => {
		if ((series === "redFed") | "redDipole" | "redWire") {
			return <ProductPage type={type} size={size} series={series} />;
		} else if ((series === "v3000") | "p2000" | "b1000") {
			return null;
		} else {
			return <ProductPageAcc type={type} size={size} series={series} />;
		}
	};
	return <>{series ? handleSeries() : null}</>;
};
