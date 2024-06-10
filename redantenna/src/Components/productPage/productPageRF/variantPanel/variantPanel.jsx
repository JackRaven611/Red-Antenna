import { useContext, useEffect } from "react";
import { AntennaContext } from "../../antennaProvider";
import { VariantPanelStyled } from ".";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const VaraintPanel = () => {
	const { type, setType, size, setSize } = useContext(AntennaContext);

	useEffect(() => {
		setType("standard");
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
				defaultValue='standard'
				onChange={handleTypeChange}
			>
				<option value='mini'>Mini</option>
				<option value='midi'>Midi</option>
				<option value='standard'>Standard</option>
				<option value='hd'>HD</option>
				<option value='extreme'>Extreme</option>
			</select>
			<ul className='checkboxes'>
				<li>
					<label
						htmlFor='80-10'
						className={size === "long" ? "label" : null}
					>
						{type === "extreme" ? "Full" : "80 - 10"}
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
						{type === "extreme" ? "Short" : "40 - 10"}
					</label>
					<input
						type='checkbox'
						id='40-10'
						value='short'
						onChange={handleSizeChange}
					/>
				</li>
				{type === "mini" ? (
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
