import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

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
			align-self: center;
			padding: 2rem 0;
			border-bottom: solid 0.3rem ${COLORS.White};
			font-size: 1.5rem;
			transition-duration: 0.2s;

			h1 {
				font-size: 2.3rem;
			}

			p {
				font-size: 1rem;
			}
		}

		.homeButton {
			padding: 0.5rem 3rem;
			width: 25rem;
			text-align: left;
		}

		.navButtons {
			width: 10rem;
		}

		.navButtons:hover {
			color: ${COLORS.mainRed};
			border-bottom: solid 0.3rem ${COLORS.mainRed};
		}
	}
`;
