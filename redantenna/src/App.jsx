import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./Components/languageChange/languageContext";
import { Nav } from "./Components/nav/nav";
import { Main } from "./Components/pages/main";
import { Footer } from "./Components/footer/footer";
import { Products } from "./Components/pages/products";
import { About } from "./Components/pages/about";
import { Contact } from "./Components/pages/contact";

function App() {
	const { languageData } = useContext(LanguageContext);
	return (
		<BrowserRouter>
			<div className='App'>
				<Nav languageData={languageData} />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='products' element={<Products />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
