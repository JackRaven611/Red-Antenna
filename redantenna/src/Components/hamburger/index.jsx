import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

export const HamburgerStyled = styled.div`
	width: 3rem;
	height: 3rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
	text-align: right;

	/* &&:hover {
		filter: invert(26%) sepia(82%) saturate(6901%) hue-rotate(352deg)
			brightness(112%) contrast(116%);
	} */

	@media screen and (min-width: 1201px) {
		display: none;

		.burger:hover {
			background-color: ${COLORS.mainRed};
		}
	}
`;
