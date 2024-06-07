import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const LanguageChangeBtnStyled = styled.select`
	outline: none;
	border: none;
	box-shadow: none;
	font-family: "Montserrat", sans-serif;
	text-align: center;
	direction: rtl;
	text-transform: uppercase;
	background-color: ${COLORS.White};
	color: ${COLORS.darkPurple};
	width: 10rem;
	font-size: 1.5rem;
	border-bottom: solid 0.3rem ${COLORS.White};
	transition-duration: 0.2s;

	&:hover {
		color: ${COLORS.mainRed};
		border-bottom: solid 0.3rem ${COLORS.mainRed};
	}
`;
