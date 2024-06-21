import { useEffect, useState } from "react";
import { LanguageChangeBtnStyled } from ".";
import { useContext } from "react";
import { LanguageContext } from "../languageContext";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const LanguageChangeBtn = () => {
	const { setSelectedLanguage, selectedLanguage } =
		useContext(LanguageContext);

	const handleLanguageChange = (event) => {
		if (
			selectedLanguage === "polish" &&
			event.target.value !== selectedLanguage
		) {
			setSelectedLanguage(event.target.value);
		} else if (
			selectedLanguage === "english" &&
			event.target.value !== selectedLanguage
		) {
			setSelectedLanguage(event.target.value);
		} else {
			return null;
		}
	};

	const handleButtonChange = () => {
		if (selectedLanguage === "polish") {
			return (
				<>
					<button
						value='english'
						onClick={handleLanguageChange}
						className='eng'
					>
						ENG
					</button>{" "}
					|{" "}
					<button value='polish' className='boldButton pl'>
						PL
					</button>
				</>
			);
		} else {
			return (
				<>
					<button
						value='english'
						onClick={handleLanguageChange}
						className='boldButton eng'
					>
						ENG
					</button>{" "}
					|{" "}
					<button value='polish' className='pl'>
						PL
					</button>
				</>
			);
		}
	};

	const [buttons, setButtons] = useState(handleButtonChange());

	useEffect(() => {
		setButtons(handleButtonChange());
	}, [selectedLanguage]);

	return (
		<LanguageChangeBtnStyled>
			<button
				value='english'
				onClick={handleLanguageChange}
				className={`${
					selectedLanguage === "english" ? "boldButton" : null
				} eng`}
			>
				ENG
			</button>
			|
			<button
				value='polish'
				onClick={handleLanguageChange}
				className={`${
					selectedLanguage === "polish" ? "boldButton" : null
				} pl`}
			>
				PL
			</button>
		</LanguageChangeBtnStyled>
	);
};
