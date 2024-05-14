import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

export const HamburgerStyled = styled.div`
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 10;
	cursor: pointer;

	.burger {
		width: 2rem;
		height: 0.25rem;
		border-radius: 1rem;
		background-color: ${COLORS.darkPurple};
		transform-origin: 0.1rem;
		transition: all 0.3s linear;
	}

	@media screen and (min-width: 1201px) {
		display: none;

		.burger:hover {
			background-color: ${COLORS.mainRed};
		}
	}
`;
