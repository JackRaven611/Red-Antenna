import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./Components/scrollToTop/scrollToTop";
import { LanguageProvider } from "./Components/languageChange/languageContext";
import { BurgerProvider } from "./Components/hamburger/burgerContext/burgerContext";
import { AntennaProvider } from "./Components/productPage/antennaProvider";
import { Nav } from "./Components/nav/nav";
import { Main } from "./Components/pages/main";
import { Footer } from "./Components/footer/footer";
import { Products } from "./Components/pages/products";
import { ProductPage } from "./Components/productPage/productPage";
import { About } from "./Components/pages/about";
import { Contact } from "./Components/pages/contact";
import { NotFound } from "./Components/pages/notFound";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<LanguageProvider>
				<div className='App'>
					<BurgerProvider>
						<Nav />
					</BurgerProvider>
					<AntennaProvider>
						<Routes>
							<Route
								path='/'
								element={<Main />}
								errorElement={<NotFound />}
							/>
							<Route
								path='/products'
								element={<Products />}
							></Route>

							<Route
								path='/products/redfed'
								element={<ProductPage />}
							/>

							<Route path='/about' element={<About />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</AntennaProvider>
					<Footer />
				</div>
			</LanguageProvider>
		</BrowserRouter>
	);
}

export default App;
