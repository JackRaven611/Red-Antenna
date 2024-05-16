import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

export const ProductStyled = styled.article`
	width: 45%;
	border-radius: 1rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition-duration: 0.2s;
	box-shadow: 0.5rem 0.5rem 0.5rem ${COLORS.darkPurple + "2d"};

	a {
		width: 60%;
		position: relative;
		padding: 1.5rem;
		border-bottom: solid 0.2rem ${COLORS.White};
		transition-duration: 0.2s;
		font-weight: ${FONTSIZE.weight.medium};
		text-transform: uppercase;
		font-size: ${FONTSIZE.a};
	}

	a:hover {
		color: ${COLORS.mainRed};
		border-color: ${COLORS.mainRed};
	}

	img {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		transition-duration: 0.2s;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-image: linear-gradient(
			to bottom,
			${COLORS.Gray + "3d"} 0%,
			rgba(255, 255, 255, 0) 100%
		);
		transition-duration: 0.2s;

		h3 {
			margin: 2rem 0 1.8rem;
			font-size: ${FONTSIZE.h3};
			font-weight: ${FONTSIZE.weight.bold};
		}

		ul {
			width: 100%;

			li {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 100%;
				gap: 0;

				p {
					padding: 0.2rem 3rem;
					text-align: left;
					font-size: ${FONTSIZE.p};
					font-weight: ${FONTSIZE.weight.medium};
				}
			}
		}
	}

	@media screen and (max-width: 1200px) {
		width: 100%;
	}

	@media screen and (max-width: 900px) {
		a {
			font-size: ${FONTSIZE.aMobile};
		}

		.wrapper {
			h3 {
				font-size: ${FONTSIZE.h3Mobile};
			}
			p {
				font-size: ${FONTSIZE.pMobile};
			}
		}
	}
`;
