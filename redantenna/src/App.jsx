import "./App.css";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./Components/scrollToTop/scrollToTop";
import { BurgerProvider } from "./Components/hamburger/burgerContext/burgerContext";
import { AntennaProvider } from "./Components/productPage/antennaProvider";
import { LanguageContext } from "./Components/languageChange/languageContext";
import { Nav } from "./Components/nav/nav";
import { Main } from "./Components/pages/main";
import { Footer } from "./Components/footer/footer";
import { Products } from "./Components/pages/products";
import { About } from "./Components/pages/about";
import { Contact } from "./Components/pages/contact";
import { NotFound } from "./Components/pages/notFound";
import { ProductPanel } from "./Components/pages/productPanel";
import { Distributors } from "./Components/pages/distributors";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

function App() {
	const { languageData } = useContext(LanguageContext);

	return (
		<BrowserRouter>
			<ScrollToTop />

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
						<Route path='/products' element={<Products />}></Route>
						<Route
							path='/products/wire'
							element={<Products type='wire' />}
						></Route>
						<Route
							path='/products/vertical'
							element={<Products type='vertical' />}
						></Route>
						<Route
							path='/products/accessories'
							element={<Products type='accessories' />}
						></Route>
						<Route
							path='/products/wire/redFed'
							element={<ProductPanel series='redFed' />}
						/>
						<Route
							path='/products/wire/redDipole'
							element={<ProductPanel series='redDipole' />}
						/>
						<Route
							path='/products/wire/redWire'
							element={<ProductPanel series='redWire' />}
						/>
						<Route
							path='/products/accessories/miniTuner'
							element={<ProductPanel series='miniTuner' />}
						/>
						<Route
							path='/products/accessories/redChoke'
							element={<ProductPanel series='redChoke' />}
						/>
						<Route
							path='/products/accessories/redMount'
							element={<ProductPanel series='redMount' />}
						/>
						<Route
							path='/products/accessories/redCon'
							element={<ProductPanel series='redCon' />}
						/>
						<Route
							path='/products/accessories/redLine'
							element={<ProductPanel series='redLine' />}
						/>

						{languageData.common.pl ? null : (
							<Route
								path='/distributors'
								element={<Distributors />}
							/>
						)}

						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</AntennaProvider>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
