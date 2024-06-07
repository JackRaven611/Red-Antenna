import { useContext, useEffect } from "react";
import { AntennaContext } from "../antennaProvider";
import { LanguageContext } from "../../languageChange/languageContext";
import { VariantPanelStyled } from ".";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const VaraintPanel = () => {
	const { languageData } = useContext(LanguageContext);
	const { type, setType, size, setSize } = useContext(AntennaContext);

	useEffect(() => {
		setType("RFStandard");
		setSize("long");
	}, []);

	const handleTypeChange = (event) => {
		setType(event.target.value);
		setSize("long");
	};

	const handleSizeChange = (event) => {
		setSize(event.target.value);
	};

	return (
		<VariantPanelStyled className='variant'>
			<select
				id='modelSelect'
				defaultValue='RFStandard'
				onChange={handleTypeChange}
			>
				<option value='RFMini'>Mini</option>
				<option value='RFMidi'>Midi</option>
				<option value='RFStandard'>Standard</option>
				<option value='RFHD'>HD</option>
				<option value='RFExtreme'>Extreme</option>
			</select>
			<ul className='checkboxes'>
				<li>
					<label
						htmlFor='80-10'
						className={size === "long" ? "label" : null}
					>
						80 - 10
					</label>
					<input
						type='checkbox'
						id='80-10'
						value='long'
						onChange={handleSizeChange}
						checked={size === "long"}
					/>
				</li>
				<li>
					<label
						htmlFor='40-10'
						className={size === "short" ? "label" : null}
					>
						40 - 10
					</label>
					<input
						type='checkbox'
						id='40-10'
						value='short'
						onChange={handleSizeChange}
						checked={size === "short"}
					/>
				</li>
				{type === "RFMini" ? (
					<li>
						<label
							htmlFor='max'
							className={size === "max" ? "label" : null}
						>
							MAX
						</label>
						<input
							type='checkbox'
							id='max'
							value='max'
							onChange={handleSizeChange}
							checked={size === "max"}
						/>
					</li>
				) : null}
			</ul>
		</VariantPanelStyled>
	);
};
