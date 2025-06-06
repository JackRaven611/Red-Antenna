import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import RF10m from "../../img/Red-Fed 80-10 pasmo 10m.webp";
import RF15m from "../../img/Red-Fed 80-10 pasmo 15m.webp";
import RF20m from "../../img/Red-Fed 80-10 pasmo 20m.webp";
import RF40m from "../../img/Red-Fed 80-10 pasmo 40m.webp";
import RF80m from "../../img/Red-Fed 80-10 pasmo 80m.webp";
import RFCP from "../../img/Red-Fed 80-10 całe pasmo.webp";
import RV12 from "../../img/RedVert-12BAL.webp";
import RVB from "../../img/RedVert-Base-BAL.webp";
import RVTS2M from "../../img/turnstile-2m.webp";
import RVTS70CM from "../../img/turnstile-70cm.webp";
import Placeholder from "../../img/ercomer.png";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const CarouselSlideItem = ({ idx, series }) => {
	const { languageData } = useContext(LanguageContext);
	const [carouselItems, setCarouselItems] = useState([]);

	const handleItems = () => {
		if (series === "redVert12") {
			setCarouselItems([
				{
					slide: {
						title: languageData.carousel.redVert12.title,
						desc: languageData.carousel.redVert12.desc,
						image: RV12,
						index: 0,
					},
				},
			]);
		} else if (series === "redVertBase") {
			setCarouselItems([
				{
					slide: {
						title: languageData.carousel.redVertBase.title,
						desc: languageData.carousel.redVertBase.desc,
						image: RVB,
						index: 0,
					},
				},
			]);
		} else if (series === "redVertTurnStile") {
			setCarouselItems([
				{
					slide: {
						title: languageData.carousel.redVertTurnStile2m.title,
						desc: languageData.carousel.redVertTurnStile2m.desc,
						image: RVTS2M,
						index: 0,
					},
				},
				{
					slide: {
						title: languageData.carousel.redVertTurnStile70cm.title,
						desc: languageData.carousel.redVertTurnStile70cm.desc,
						image: RVTS70CM,
						index: 1,
					},
				},
			]);
		} else {
			setCarouselItems([
				{
					slide: {
						title: languageData.carousel.RfCP.title,
						desc: languageData.carousel.RfCP.desc,
						image: RFCP,
						index: 0,
					},
				},
				{
					slide: {
						title: languageData.carousel.RfHd80.title,
						desc: languageData.carousel.RfHd80.desc,
						image: RF80m,
						index: 1,
					},
				},
				{
					slide: {
						title: languageData.carousel.RfHd40.title,
						desc: languageData.carousel.RfHd40.desc,
						image: RF40m,
						index: 2,
					},
				},
				{
					slide: {
						title: languageData.carousel.RfHd20.title,
						desc: languageData.carousel.RfHd20.desc,
						image: RF20m,
						index: 3,
					},
				},
				{
					slide: {
						title: languageData.carousel.RfHd15.title,
						desc: languageData.carousel.RfHd15.desc,
						image: RF15m,
						index: 4,
					},
				},
				{
					slide: {
						title: languageData.carousel.RfHd10.title,
						desc: languageData.carousel.RfHd10.desc,
						image: RF10m,
						index: 5,
					},
				},
			]);
		}
	};

	useEffect(handleItems, [series, languageData]);

	const handleHidden = (itemIdx) => {
		if (idx !== itemIdx) {
			return "hidden";
		} else {
			return null;
		}
	};

	return carouselItems.map((carouselItem) => {
		return (
			<li
				className={handleHidden(carouselItem.slide.index)}
				key={carouselItem.slide.index}
			>
				<div>
					<img
						src={carouselItem.slide.image}
						alt={carouselItem.slide.title}
					/>
				</div>
				<div>
					<h4>{carouselItem.slide.title}</h4>
					<p>{carouselItem.slide.desc}</p>
				</div>
			</li>
		);
	});
};
