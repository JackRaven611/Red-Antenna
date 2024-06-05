import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

export const VariantPanelStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		width: 60%;
		display: flex;
		flex-direction: column;
	}

	ul {
		display: flex;
		gap: 0.5rem;
	}

	.button {
		border: 0.2rem solid ${COLORS.mainRed};
		border-radius: 0.5rem;
		width: 5.5rem;
		cursor: pointer;
		font-size: ${FONTSIZE.p};
		font-weight: ${FONTSIZE.weight.bold};
	}
`;
