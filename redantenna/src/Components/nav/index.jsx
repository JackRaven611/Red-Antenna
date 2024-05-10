import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const NavStyled = styled.nav`
	z-index: 10;
	background-color: ${COLORS.White};
	color: ${COLORS.darkPurple};
	width: 100%;
	height: 6.05rem;
	position: fixed;
	display: flex;
	justify-content: center;
	ul {
		width: 80%;
		display: flex;
		justify-content: space-between;
	}

	li {
		display: flex;

		a {
			width: 100%;
			font-weight: 500;
			align-self: center;
			padding: 2rem 0;
			border-bottom: solid 0.3rem ${COLORS.White};
			font-size: ${FONTSIZE.a};
			font-weight: ${FONTSIZE.weight.medium};
			transition-duration: 0.2s;

			h1 {
				font-size: 2.3rem;
				transition-duration: 0.2s;
				font-size: ${FONTSIZE.h1};
				font-weight: ${FONTSIZE.weight.bold};
			}

			p {
				font-size: 1rem;
				font-size: ${FONTSIZE.p};
				font-weight: ${FONTSIZE.weight.medium};
			}
		}

		.homeButton {
			padding: 0.5rem 3rem 0.5rem 0;
			width: 25rem;
			text-align: left;
		}

		.homeButton:hover {
			h1 {
				color: ${COLORS.mainRed};
			}
		}

		.navButtons {
			width: 10rem;
		}

		.navButtons:hover {
			color: ${COLORS.mainRed};
			border-color: ${COLORS.mainRed};
		}
	}
`;
