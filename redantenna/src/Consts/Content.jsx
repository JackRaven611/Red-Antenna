export const TEXTS = {
	polish: {
		brandName: "RED-ANTENNA",
		homeBtnP: "High Performance Antenna System",
		pl: "Polski",
		en: "Angielski",
		navBtnProducts: "PRODUKTY",
		navBtnAbout: "O NAS",
		navBtnContact: "KONTAKT",
		header: "ANTENY WYSOKIEJ KLASY",
		headerP: "GDY LICZY SIĘ WYDAJNOŚĆ I JAKOŚĆ",
		handmadeTitle: "RĘCZNIE ROBIONE W POLSCE",
		handmadeText:
			"Rynek obecnie zalany jest produkcją masową. Przewagę naszej marce dodaje fakt, że jesteśmy manufakturą, nasze anteny wykonywane są ręcznie i każdy egzemplarz jest poddawany indywidualnym pomiarom na etapie produkcji. Oferujemy przemyślane produkty, ale jesteśmy gotowi do wykonania produktu na Twoje indywidualne zamówienie spełniający specyficzne potrzeby. Produkty wykonywane w Polsce spełniają wysokie wymagania jakościowe. ",
		designTitle: "BEZKOMPROMISOWO ZAPROJEKTOWANE",
		design: "Nasze anteny są zaprojektowane bez kompromisów, które często prowadzą do obniżenia jakości produktów. Już na etapie projektowania dbamy o szczegóły dotyczące używanych materiałów (tylko najwyższej jakości), rozwiązań technicznych oraz zoptymalizowanie konstrukcji pod kątem osiągnięcia możliwie największej efektywności anten. Anteny projektujemy tak, aby spełniały nasze założenia dostarczania produktów klasy high-end, tj. najwyższej jakości. Bez oszczędzania, bez kompromisów.",

		effectivenessTitle: "POTWIERDZONA EFEKTYWNOŚĆ",

		effectiveness:
			"Nasze anteny projektowane są w oparciu o wiedzę specjalistyczną oraz duże doświadczenie zawodowe. Wykorzystujemy także specjalistyczne oprogramowanie do modelowania anten. Jednak rzeczywistą efektywność przede wszystkim potwierdzają nasze testy praktyczne pomiaru gęstości pola elektromagnetycznego oraz praktyczne testy pomiaru siły sygnału prowadzone z wykorzystaniem sieci beaconów WSPR. Odbiorniki WSPR rozlokowane na całym świecie raportują rzeczywisty pomiar siły odbieranego sygnału. Z pewnością też efektywność naszych anten potwierdzają doskonałe opinie i liczne rekomendacje ze strony użytkowników naszych anten. ",
		aboutTitle: "NASZA MISJA",
		aboutText:
			"Antena jest najważniejszym elementem, mających wpływ na zasięg każdego systemu nadawczo-odbiorczego. Naszym celem jest tworzenie bezkompromisowych anten, optymalnie zaprojektowanych, cechujących się najlepszymi parametrami i najwyższą jakością wykonania. Osiągnęliśmy go poprzez odpowiedni dobór elementów składowych, szereg testów praktycznych i wytrzymałościowych oraz pomiarów. Bazujemy na rzetelnych opracowaniach naukowych, eksperymentach wielu radioamatorów oraz przede wszystkim własnych wieloletnich doświadczeniach w budowie systemów antenowych i pracy na pasmach krótkofalowych. Dlatego też nasze anteny wyprzedzają pod wieloma względami konkurencyjne produkty dostępne na rynku i tworzą ekskluzywną linię anten wysokiej klasy (tzw. High End)",
		footer: {
			titleStore: "Sklep Firmowy",
			titleContact: "Kontakt",
			titleAbout: "O Red Antenna",
			ourStore: "Sklep stacjonarny",
			storeLocation: "ul. Bieżuńska 1 lok. 51 03-578 Warszawa",
			hoursTitle: "Godziny otwarcia",
			open: "Pon-Pt 10:00 - 18:00",
			country: "Polska",
			location: "https://maps.app.goo.gl/s7hr6nTTHfrLKx3w6",
			onlineStore: "Sklep online",
			onlineStoreLink: "https://www.ercomer.pl/",
			phoneMain: "(+48) 22 270 12 15",
			phoneMainTitle: "Telefon główny",
			phoneSec: "(+48) 798 792 927",
			phoneSecTitle: "Telefon komórkowy",
			phoneService: "(+48) 22 270 12 07",
			phoneServiceTitle: "Dział produkcji i serwisu",
			emailTitle: "Adres mailowy",
			email: "info@ercomer.com",
			about: "RED-ANTENNA jest marką handlową firmy ERcomER. Powstała w oparciu o wieloletnie doświadczenie, pasję i chęć tworzenia najlepszych produktów w zakresie osprzętu radiokomunikacyjnego.",
		},
		products: {
			wireText:
				"Anteny typu drutowego to popularne rozwiązanie do pracy w szczególności na pasma fal krótkich. Z uwagi na często znaczną długość promiennika zapewniają bardzo dobrą efektywność dla niskich częstotliwości. Instalowane są zazwyczaj w polaryzacji poziomej, skośnej lub jako odwrócone V. Dostępne są konstrukcje o zróżnicowanej długości oraz charakterystyce promieniowania. Jednym z najpopularniejszych w tej grupie anten jest model Red-Fed.",
			wire: {
				RFMini40: {
					model: "Red-Fed Mini 40-10 ",
					spec: {
						bands: "Pasma pracy: 40m, 20m, 10m",
						span: "Rozpiętość anteny: około 12m",
						weight: "Waga: 260g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 80kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 40W",
							cw: "CW 30W",
							digi: "DIGI 20W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 51x49x36",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: BNC",
							antenna: "antena: 2x M3",
						},
						core: "Wielkość rdzenia: Amidon FT82",
						windings:
							"Uzwojenia: drut emaliowany DNE 0.6mm (balun i cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 0.5mm2",
						wire: "Linka mocująca: 2x 10m PE 2mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-Mini-40-10/2669",
					linkText: "Sklep",
				},
				RFMini80: {
					model: "Red-Fed Mini 80-10 ",
					spec: {
						bands: "Pasma pracy: 80, 40m, 20m, 15m, 10m",
						span: "Rozpiętość anteny: około 23m",
						weight: "Waga: 360g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 80kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 40W",
							cw: "CW 30W",
							digi: "DIGI 20W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 51x49x36",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: BNC",
							antenna: "Antena: 2x M3",
						},
						core: "Wielkość rdzenia: Amidon FT82",
						windings:
							"Uzwojenia: drut emaliowany DNE 0.6mm (balun i cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 0.5mm2",
						wire: "Linka mocująca: 2x 10m PE 2mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-Mini-80-10/2668",
					linkText: "Sklep",
				},
				RFMidi40: {
					model: "Red-Fed Midi 40-10 ",
					spec: {
						bands: "Pasma pracy: 40m, 20m, 10m",
						span: "Rozpiętość anteny: około 12m",
						weight: "Waga: 530g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 80kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 150W",
							cw: "CW 100W",
							digi: "DIGI 75W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 50x70x36",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: SO239 (UC1, UHF)",
							antenna: "antena: 2x M4",
						},
						core: "Wielkość rdzenia: Amidon FT140",
						windings:
							"Uzwojenia: drut emaliowany DNE 1.0mm (balun i cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 1.0mm2",
						wire: "Linka mocująca: 2x 10m PE 3mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-Midi-40-10/2667",
					linkText: "Sklep",
				},
				RFMidi80: {
					model: "Red-Fed Midi 80-10 ",
					spec: {
						bands: "Pasma pracy: 80m, 40m, 20m, 15m, 10m",
						span: "Rozpiętość anteny: około 23m",
						weight: "Waga: 740g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 80kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 150W",
							cw: "CW 100W",
							digi: "DIGI 75W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 50x70x36",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: SO239 (UC1, UHF)",
							antenna: "antena: 2x M4",
						},
						core: "Wielkość rdzenia: Amidon FT140",
						windings:
							"Uzwojenia: drut emaliowany DNE 1.0mm (balun i cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 1.0mm2",
						wire: "Linka mocująca: 2x 10m PE 3mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-Midi-80-10/2666",
					linkText: "Sklep",
				},
				RFStandard40: {
					model: "Red-Fed Standard 40-10 ",
					spec: {
						bands: "Pasma pracy: 40m, 20m, 10m",
						span: "Rozpiętość anteny: około 12m",
						weight: "Waga: 710g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 80kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 400W",
							cw: "CW 300W",
							digi: "DIGI 200W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 74x89x41",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: SO239 (UC1, UHF)",
							antenna: "antena: 2x M5",
						},
						core: "Wielkość rdzenia: Amidon FT140",
						windings:
							"Uzwojenia: drut emaliowany DN2E 1.6mm (balun) i 1.0mm (cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 1.5mm2",
						wire: "Linka mocująca: 2x 10m PE 3mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-Standard-40-10/2384",
					linkText: "Sklep",
				},
				RFStandard80: {
					model: "Red-Fed Standard 80-10 ",
					spec: {
						bands: "Pasma pracy: 80m, 40m, 20m, 15m, 10m",
						span: "Rozpiętość anteny: około 23m",
						weight: "Waga: 1050g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 80kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 400W",
							cw: "CW 300W",
							digi: "DIGI 200W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 74x89x41",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: SO239 (UC1, UHF)",
							antenna: "antena: 2x M5",
						},
						core: "Wielkość rdzenia: Amidon FT140",
						windings:
							"Uzwojenia: drut emaliowany DN2E 1.6mm (balun) i 1.0mm (cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 1.5mm2",
						wire: "Linka mocująca: 2x 10m PE 3mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-Standard-80-10-/2385",
					linkText: "Sklep",
				},
				RFHD40: {
					model: "Red-Fed HD 40-10 ",
					spec: {
						bands: "Pasma pracy: 40m, 20m, 10m",
						span: "Rozpiętość anteny: około 12m",
						weight: "Waga: 1120g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 80kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 400W",
							cw: "CW 300W",
							digi: "DIGI 200W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 74x89x41",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: SO239 (UC1, UHF)",
							antenna: "antena: 2x M5",
						},
						core: "Wielkość rdzenia: Amidon FT240",
						windings:
							"Uzwojenia: drut emaliowany DN2E 1.6mm (balun i cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 2.5mm2",
						wire: "Linka mocująca: 2x 10m PE 4mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-HD-40-10-/2386",
					linkText: "Sklep",
				},
				RFHD80: {
					model: "Red-Fed HD 80-10 ",
					spec: {
						bands: "Pasma pracy: 80m, 40m, 20m, 15m, 10m",
						span: "Rozpiętość anteny: około 23m",
						weight: "Waga: 1470g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 80kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 400W",
							cw: "CW 300W",
							digi: "DIGI 200W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 74x89x41",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: SO239 (UC1, UHF)",
							antenna: "antena: 2x M5",
						},
						core: "Wielkość rdzenia: Amidon FT240",
						windings:
							"Uzwojenia: drut emaliowany DN2E 1.6mm (balun i cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 2.5mm2",
						wire: "Linka mocująca: 2x 10m PE 4mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-HD-80-10-/2387",
					linkText: "Sklep",
				},
				RFMini80Max: {
					model: "Red-Fed Mini 80 MAX ",
					spec: {
						bands: "Pasma pracy: 80m",
						span: "Rozpiętość anteny: około 34m",
						weight: "Waga: 300g",
						range: "Szerokość pracy dla pasma dolnego (SWR 2.0): około 280kHz",
						swr: "Maksymalny SWR w pozostałych pasmach: <2.0",
						power: {
							title: "Przenoszona moc:",
							ssb: "SSB 40W",
							cw: "CW 30W",
							digi: "DIGI 20W",
						},
						size: "Wymiary baluna (mm, bez zaczepów): 51x49x36",
						connectors: {
							title: "Złącza:",
							feeder: "fider 50Ω: BNC",
							antenna: "antena: 2x M3",
						},
						core: "Wielkość rdzenia: RA1616",
						windings:
							"Uzwojenia: drut emaliowany DNE 0.6mm (balun i cewka)",
						antennaWire:
							"Linka antenowa: linka miedziana Cu 0.5mm2",
						wire: "Linka mocująca: 2x 10m PE 2mm",
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Antena-Red-Fed-Mini-80-MAX/3013",
					linkText: "Sklep",
				},
				RFExtreme: {
					title: "",
					titleSec: "",
					text: "",
					StoreLink: "",
					StoreLinkSec: "",
				},
			},
			vertical: {
				RED3000: {
					title: "",
					titleSec: "",
					text: "",
					StoreLink: "",
					StoreLinkSec: "",
				},
				UniVertical: {
					title: "",
					titleSec: "",
					text: "",
					StoreLink: "",
					StoreLinkSec: "",
				},
			},
			accesories: {
				miniTuner: {
					model: "Mini-Tuner wtyk BNC",
					spec: {
						text: "Ultra mały i lekki tuner dla anteny typu EFHW (End Fed Half Wire) ze wskaźnikiem SWR. Do skuteczngo dostrojenia anteny nie jest wymagany miernik SWR w transceiverze. Zapewnia dostrojenie półfalowgo promiennika (linka antenowa o długości połowy fali danego pasma) do rezonansu w pasmach 40m/30m/20m/15m. Nie uszkodzisz stopnia końcowego mocy transceivera przy niedopasowanej antenie - układ tunera ma wbudowane sztuczne ociążenie, wykorzystywane podczas strojenia promiennika (przełącznik strojenie/praca). Sygnalizacja dostrojenia za pomocą czerwonej diody LED. Wersja wyposażona we wtyk BNC, umożliwiająca połączenie tunera bezpośrednio z transceiverem bez użycia kabla koncentrycznego.",
						weight: "Waga: 70g",
						power: {
							title: "Moc wejściowa:",
							value: "10W P.E.P",
						},
						size: "Wymiary obudowy tunera: 60mm x 40mm x 30mm",
						connectors: {
							title: "Złącza:",
							feeder: "gniazdo BNC żeńskie x 1",
							antenna:
								"banan x 2 (dla promiennika czerwone, dla przeciwwagi czarne)",
						},
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Red-Antenna-EFHW-Mini-Tuner-wtyk-BNC/3241",
					linkText: "Sklep",
				},
				miniTunerCable: {
					model: "Mini-Tuner gniazdo BNC",
					spec: {
						text: "Ultra mały i lekki tuner dla anteny typu EFHW (End Fed Half Wire) ze wskaźnikiem SWR. Do skuteczngo dostrojenia anteny nie jest wymagany miernik SWR w transceiverze. Zapewnia dostrojenie półfalowgo promiennika (linka antenowa o długości połowy fali danego pasma) do rezonansu w pasmach 40m/30m/20m/15m. Nie uszkodzisz stopnia końcowego mocy transceivera przy niedopasowanej antenie - układ tunera ma wbudowane sztuczne ociążenie, wykorzystywane podczas strojenia promiennika (przełącznik strojenie/praca). Sygnalizacja dostrojenia za pomocą czerwonej diody LED. Wersja wyposażona w gniazdo BNC, umożliwiająca połączenie tunera z transceiverem za pomocą kabla koncentrycznego.",
						weight: "Waga: 70g",
						power: {
							title: "Moc wejściowa:",
							value: "10W P.E.P",
						},
						size: "Wymiary obudowy tunera: 60mm x 40mm x 30mm",
						connectors: {
							title: "Złącza:",
							feeder: "gniazdo BNC żeńskie x 1",
							antenna:
								"banan x 2 (dla promiennika czerwone, dla przeciwwagi czarne)",
						},
					},
					storeLink:
						"https://www.ercomer.pl/pl/p/Red-Antenna-EFHW-Mini-Tuner-gniazdo-BNC/3220",
					linkText: "Sklep",
				},
			},
		},
		aboutSection: {
			title: "Łączność to nasza pasja",
			wsrp: "Nasze anteny testowane są pod wkątem faktycznej efektywności wykorzystując rzetelne raporty WSPR. Stacje odbiorcze rozlokowane są na całym świecie i przekazują dokładny poziom siły odbieranego sygnału (w jednostkach dBm). Korzystamy z tego systemu optymalizując projekty i konstrukcje naszych anten.",
		},
		contactSection: {
			form: "Przejdź do formularza",
			formLink: "https://www.ercomer.pl/pl/contact",
			formTitle: "Formularz kontaktowy",
		},
	},
};
