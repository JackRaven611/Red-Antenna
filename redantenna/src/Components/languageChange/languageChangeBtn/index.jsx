import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const LanguageChangeBtnStyled = styled.div`
	width: 100%;
	font-size: ${FONTSIZE.a};
	align-self: center;
	transition-duration: 0.2s;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	button {
		font-size: ${FONTSIZE.a};
		font-weight: ${FONTSIZE.weight.medium};
		font-family: "Montserrat", sans-serif;
		min-width: 15%;
		padding: 1.65rem 0;
		background-color: ${COLORS.White};
		box-shadow: none;
		border: none;
		transition-duration: 0.2s;
		cursor: pointer;
	}

	button:hover {
		color: ${COLORS.mainRed};
	}

	.pl {
		padding-left: 0.5rem;
		text-align: center;
	}

	.eng {
		padding-right: 0.5rem;
		text-align: center;
	}

	.boldButton {
		font-weight: ${FONTSIZE.weight.bold};
	}

	.boldButton:hover {
		color: ${COLORS.darkPurple};
	}

	@media screen and (max-width: 1300px) {
		justify-content: center;
		button {
			font-size: ${FONTSIZE.aMobile};
			font-weight: ${FONTSIZE.weight.light.medium};
			padding: 1rem 0;
		}
	}
`;
