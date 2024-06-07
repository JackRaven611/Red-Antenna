import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const NavStyled = styled.nav`
	z-index: 3;
	background-color: ${COLORS.White};
	color: ${COLORS.darkPurple};
	box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};
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
			padding: 2.15rem 0;
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
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
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

		.desktopNav {
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

		.wrapper {
			.hamburger {
				display: flex;
				padding-top: 12rem;
				margin-left: 1rem;
				z-index: 1;
			}

			.homeButton {
				h1 {
					font-size: ${FONTSIZE.h1Mobile};
				}
				p {
					font-size: 0.87rem;
				}
			}

			.desktopNav {
				z-index: -10;
				display: ${({ $hamburgerOpen }) =>
					$hamburgerOpen ? "flex" : "none"};
				margin-top: 14rem;
				position: absolute;
				flex-direction: column;
				align-items: flex-end;
				width: 80%;
				border-bottom-right-radius: 0.5rem;
				border-bottom-left-radius: 0.5rem;
				transition-duration: 0.2s;
				background-color: ${COLORS.White};
				overflow: hidden;

				li {
					width: 100%;
					border-bottom: solid 0.15rem ${COLORS.Gray};
				}

				.navButtons {
					padding: 0.5rem;
					width: 100%;
					border-color: transparent;
					background-color: transparent;
				}

				.navButton:hover {
					border-color: ${COLORS.mainRed};
				}
			}
		}
	}
`;
