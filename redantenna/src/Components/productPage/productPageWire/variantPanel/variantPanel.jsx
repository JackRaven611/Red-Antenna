import { useContext, useEffect } from "react";
import { AntennaContext } from "../../antennaProvider";
import { VariantPanelStyled } from ".";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const VaraintPanel = ({ series }) => {
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

	const handleExtreme = (length) => {
		if (type === "extreme" && length === "80-10") {
			return "Full";
		} else if (type === "extreme" && length === "40-10") {
			return "Short";
		} else {
			return length;
		}

		return type === "extreme" ? "Full" : length;
	};

	return (
		<VariantPanelStyled className='variant'>
			<select
				id='modelSelect'
				defaultValue='standard'
				onChange={handleTypeChange}
			>
				{series === "redFed" ? (
					<>
						<option value='mini'>Mini</option>
						<option value='midi'>Midi</option>
						<option value='standard'>Standard</option>
						<option value='hd'>HD</option>
						<option value='extreme'>Extreme</option>
					</>
				) : (
					<>
						<option value='mini'>Mini</option>
						<option value='midi'>Midi</option>
						<option value='standard'>Standard</option>
						<option value='hd'>HD</option>
						<option value='hd600'>HD 600W+</option>
						<option value='hd1500'>HD 1500W+</option>
					</>
				)}
			</select>
			{series === "redFed" || series === "redWire" ? (
				<ul className='checkboxes'>
					<li>
						<label
							htmlFor='80-10'
							className={size === "long" ? "label" : null}
						>
							{series === "redFed"
								? handleExtreme("80-10")
								: "W38"}
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
							{series === "redFed"
								? handleExtreme("40-10")
								: "W16"}
						</label>
						<input
							type='checkbox'
							id='40-10'
							value='short'
							onChange={handleSizeChange}
						/>
					</li>
					{series === "redFed" && type === "mini" ? (
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
			) : null}
		</VariantPanelStyled>
	);
};
