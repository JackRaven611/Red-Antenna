import { useContext, useEffect } from "react";
import { AntennaContext } from "../antennaProvider";
import { LanguageContext } from "../../languageChange/languageContext";
import { VariantPanelStyled } from ".";

// Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com

export const VariantPanel = ({ series }) => {
	const { type, setType, size, setSize } = useContext(AntennaContext);
	const { languageData } = useContext(LanguageContext);

	useEffect(() => {
		setType("standard");
		setSize("long");
	}, [setType, setSize]);

	const handleTypeChange = (e) => {
		const selected = e.target.value;
		setType(selected);
		setSize("long");
	};

	const handleSizeChange = (e) => {
		setSize(e.target.value);
	};

	const getLabel = (length) => {
		if (type !== "extreme") return length;
		return length === "80-10"
			? "Full"
			: length === "40-10"
			? "Short"
			: length;
	};

	const renderOption = (label, value, isSelected) => (
		<li key={value}>
			<label htmlFor={value} className={isSelected ? "label" : undefined}>
				{label}
			</label>
			<input
				type='checkbox'
				id={value}
				value={value}
				checked={isSelected}
				onChange={handleSizeChange}
			/>
		</li>
	);

	const renderTypeOptions = () => {
		const options =
			series === "redFed"
				? ["mini", "midi", "standard", "hd", "extreme"]
				: ["mini", "midi", "standard", "hd", "hd600", "hd1500"];

		return options.map((opt) => (
			<option key={opt} value={opt}>
				{opt.toUpperCase()}
			</option>
		));
	};

	const isFed = ["redFed", "redWire", "redDipole"].includes(series);
	const isVert = ["redVert12", "redVertBase"].includes(series);
	const isAcc = ["miniTuner", "redCon"].includes(series);

	let sizeOptions = [];

	if (isFed) {
		sizeOptions = [
			{
				label: series === "redFed" ? getLabel("80-10") : "W38",
				value: "long",
				id: "80-10",
			},
			{
				label: series === "redFed" ? getLabel("40-10") : "W16",
				value: "short",
				id: "40-10",
			},
		];
		if (series === "redFed" && type === "mini") {
			sizeOptions.push({ label: "MAX", value: "max", id: "max" });
		}
	} else if (isVert) {
		const product = languageData.products.vertical[series];
		sizeOptions = [
			{ label: product.long.model, value: "long", id: "long" },
			{ label: product.short.model, value: "short", id: "short" },
		];
	} else if (isAcc) {
		const product = languageData.products.accessories[series];
		sizeOptions = [
			{
				label:
					series === "miniTuner"
						? product.long.feeder
						: product.long.series,
				value: "long",
				id: "long",
			},
			{
				label:
					series === "miniTuner"
						? product.short.feeder
						: product.short.series,
				value: "short",
				id: "short",
			},
		];
		if (series === "redCon") {
			sizeOptions.push({
				label: product.mid.series,
				value: "mid",
				id: "mid",
			});
		}
	}

	if (!isFed && !isVert && !isAcc) return null;

	return (
		<VariantPanelStyled className='variant'>
			{isFed && (
				<select
					id='modelSelect'
					value={type}
					onChange={handleTypeChange}
				>
					{renderTypeOptions()}
				</select>
			)}
			{series !== "redDipole" ? (
				<ul className='checkboxes'>
					{sizeOptions.map((opt) =>
						renderOption(opt.label, opt.value, size === opt.value)
					)}
				</ul>
			) : null}
		</VariantPanelStyled>
	);
};
