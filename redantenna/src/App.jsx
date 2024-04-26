import "./App.css";
import { useContext } from "react";
import { LanguageContext } from "./Components/languageChange/languageContext";
import { Nav } from "./Components/nav/nav";
import { Wrapper } from "./Components/wrapper/wrapper";
import backgroundImg from "./img/RedFed zbiorcze 1.JPG";

function App() {
	const { languageData } = useContext(LanguageContext);
	return (
		<div className='App'>
			<Nav languageData={languageData} />
			<Wrapper>
				<img src={backgroundImg} alt='Background Antennas' />
			</Wrapper>
		</div>
	);
}

export default App;
