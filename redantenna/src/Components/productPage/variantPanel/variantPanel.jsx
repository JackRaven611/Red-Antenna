import { useContext } from "react";
import { AntennaContext } from "../antennaProvider";
import { LanguageContext } from "../../languageChange/languageContext";
import { VariantPanelStyled } from ".";

export const VaraintPanel = () => {
	const { languageData } = useContext(LanguageContext);
	const { setType, setSize } = useContext(AntennaContext);

	const handlemodelChange = (event) => {
		setType(event.target.value);
	};

	return (
		<VariantPanelStyled>
			<div>
				<select
					id='modelSelect'
					defaultValue='RFStandard'
					onChange={handlemodelChange}
				>
					<option value='RFMini'>Mini</option>
					<option value='RFMidi'>Midi</option>
					<option value='RFStandard'>Standard</option>
					<option value='RFHD'>HD</option>
					<option value='RFExtreme'>Extreme</option>
				</select>
			</div>
		</VariantPanelStyled>
	);
};
