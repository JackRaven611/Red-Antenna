import { useContext, useEffect } from "react";
import { AntennaContext } from "../antennaProvider";
import { VariantPanelStyled } from "../productPageWire/variantPanel/index";
import { LanguageContext } from "../../languageChange/languageContext";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const VaraintAcc = ({ series }) => {
	const { size, setSize } = useContext(AntennaContext);
	const { languageData } = useContext(LanguageContext);
	const product = languageData.products.accessories[series];

	useEffect(() => {
		setSize("long");
	}, []);

	const handleSizeChange = (event) => {
		setSize(event.target.value);
	};

	return (
		<VariantPanelStyled className='variant'>
			{series === "miniTuner" || series === "redCon" ? (
				<ul className='checkboxes'>
					<li>
						<label
							htmlFor='80-10'
							className={size === "long" ? "label" : null}
						>
							{series === "miniTuner"
								? product.long.feeder
								: product.long.series}
						</label>
						<input
							type='checkbox'
							id='80-10'
							value='long'
							onChange={handleSizeChange}
						/>
					</li>
					<li>
						<label
							htmlFor='40-10'
							className={size === "short" ? "label" : null}
						>
							{series === "miniTuner"
								? product.short.feeder
								: product.short.series}
						</label>
						<input
							type='checkbox'
							id='40-10'
							value='short'
							onChange={handleSizeChange}
						/>
					</li>
					{series === "redCon" ? (
						<li>
							<label
								htmlFor='20-10'
								className={size === "mid" ? "label" : null}
							>
								{product.mid.series}
							</label>
							<input
								type='checkbox'
								id='20-10'
								value='mid'
								onChange={handleSizeChange}
							/>
						</li>
					) : null}
				</ul>
			) : null}
		</VariantPanelStyled>
	);
};
