import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./Components/scrollToTop/scrollToTop";
import { LanguageProvider } from "./Components/languageChange/languageContext";
import { BurgerProvider } from "./Components/hamburger/burgerContext/burgerContext";
import { Nav } from "./Components/nav/nav";
import { Main } from "./Components/pages/main";
import { Footer } from "./Components/footer/footer";
import { Products } from "./Components/pages/products";
import { About } from "./Components/pages/about";
import { Contact } from "./Components/pages/contact";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<LanguageProvider>
				<div className='App'>
					<BurgerProvider>
						<Nav />
					</BurgerProvider>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='products' element={<Products />} />
						<Route path='about' element={<About />} />
						<Route path='contact' element={<Contact />} />
					</Routes>
					<Footer />
				</div>
			</LanguageProvider>
		</BrowserRouter>
	);
}

export default App;
