import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const NavStyled = styled.nav`
	z-index: 10;
	background-color: ${COLORS.White};
	color: ${COLORS.darkPurple};
	width: 100%;
	height: 6rem;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;

	.wrapper {
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.navButtons {
			width: 100%;
			min-width: 10rem;
			align-self: center;
			padding: 2rem 0;
			background-color: ${COLORS.White};
			border-bottom: solid 0.2rem ${COLORS.White};
			font-size: ${FONTSIZE.a};
			font-weight: ${FONTSIZE.weight.medium};
			transition-duration: 0.2s;
		}

		.navButtons:hover {
			color: ${COLORS.mainRed};
			border-color: ${COLORS.mainRed};
		}

		.homeButton {
			width: 20rem;
			text-align: left;
			h1 {
				transition-duration: 0.2s;
				font-size: ${FONTSIZE.h1};
				font-weight: ${FONTSIZE.weight.bold};
			}
			p {
				font-size: ${FONTSIZE.p};
				font-weight: ${FONTSIZE.weight.medium};
			}
		}

		.homeButton:hover {
			h1 {
				color: ${COLORS.mainRed};
			}
		}

		ul {
			width: 60%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;

			li {
				display: flex;
				width: 20%;
			}
		}

		.hamburger {
			display: none;
		}
	}

	@media screen and (max-width: 1200px) {
		flex-wrap: wrap;

		.hamburger {
			display: flex;
			padding-top: 12rem;
			margin-left: 1rem;
			z-index: 10;
		}

		.desktopNav {
			display: ${(props) =>
				props.hamburgerOpen ? "flex" : "none"} !important;
			background-color: blue;
			justify-content: flex-end;
			width: 30%;
			margin-top: 25rem;
			position: absolute;
			flex-direction: column;
		}
	}
`;
