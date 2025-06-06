import { useEffect, useState } from "react";
import { CarouselSlideItem } from "./carouselItem";
import { CarouselStyled } from ".";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Carousel = ({ series }) => {
	const [carouselIndex, setCarouselIndex] = useState(0);
	const [maxIndex, setMaxIndex] = useState(0);

	useEffect(() => {
		if (series === "redVertTurnStile") {
			setMaxIndex(1);
		} else if (series === "redVert12" || series === "redVertBase") {
			setMaxIndex(0);
		} else {
			setMaxIndex(5);
		}
	}, [series]);

	const handlePrevClick = (idx) => {
		if (idx <= 0) {
			setCarouselIndex(0);
		} else {
			setCarouselIndex(idx - 1);
		}
	};

	const handleNextClick = (idx) => {
		if (idx >= maxIndex) {
			setCarouselIndex(maxIndex);
		} else {
			setCarouselIndex(idx + 1);
		}
	};

	const handleDissable = (isLeft, idx) => {
		if (isLeft == true && idx <= 0) {
			return "disabled";
		} else if (isLeft == false && idx >= maxIndex) {
			return "disabled";
		} else {
			return null;
		}
	};

	return (
		<CarouselStyled>
			{series === "redVert12" || series === "redVertBase" ? null : (
				<button
					className={handleDissable(true, carouselIndex)}
					onClick={() => handlePrevClick(carouselIndex)}
				>
					<div className='left'></div>
				</button>
			)}

			<div className='carouselContainer'>
				<ul className='carousel'>
					<CarouselSlideItem idx={carouselIndex} series={series} />
				</ul>
			</div>
			{series === "redVert12" || series === "redVertBase" ? null : (
				<button
					className={handleDissable(false, carouselIndex)}
					onClick={() => handleNextClick(carouselIndex)}
				>
					<div className='right'></div>
				</button>
			)}
		</CarouselStyled>
	);
};
