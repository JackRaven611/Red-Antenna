import "./App.css";
import { useContext } from "react";
import { LanguageContext } from "./Components/languageChange/languageContext";
import { Nav } from "./Components/nav/nav";
import { InfoBox } from "./Components/infoBox/infoBox";
import { Background } from "./Components/background/background";
import { AboutBox } from "./Components/aboutBox/aboutBox";
import { Footer } from "./Components/footer/footer";

function App() {
	const { languageData } = useContext(LanguageContext);
	return (
		<div className='App'>
			<Nav languageData={languageData} />
			<Background />
			<InfoBox />
			<AboutBox />
			<Footer></Footer>
		</div>
	);
}

export default App;
