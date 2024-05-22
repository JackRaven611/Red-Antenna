import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const AboutSectionStyled = styled.section`
	margin: 8rem 0;
	height: 45rem;
	width: 100%;
	display: flex;
	justify-content: center;
	height: auto;

	article {
		box-shadow: 0.5rem 0.5rem 0.5rem ${COLORS.darkPurple + "2d"};
		display: flex;
		width: 80%;

		border-radius: 0.5rem;
		overflow: hidden;
		background-image: linear-gradient(
			to bottom,
			${COLORS.Gray + "9d"} 0%,
			rgba(255, 255, 255, 0) 100%
		);
		img {
			width: 50%;
			object-fit: cover;
		}
		div {
			width: 50%;

			h2 {
				text-transform: uppercase;
				margin: 2rem;
				line-height: 2rem;
				font-size: ${FONTSIZE.h2};
				font-weight: ${FONTSIZE.weight.bold};
			}

			p {
				margin: 2rem 3rem;
				font-size: ${FONTSIZE.p};
				font-weight: ${FONTSIZE.weight.medium};
				text-align: left;
			}
		}
	}

	@media screen and (max-width: 1200px) {
		article {
			flex-direction: column;

			img {
				width: 100%;
				max-height: 20rem;
			}

			div {
				width: 100%;
			}
		}
	}

	@media screen and (max-width: 900px) {
		div {
			h2 {
				font-size: ${FONTSIZE.h2Mobile};
			}
			p {
				font-size: ${FONTSIZE.pMobile};
			}
		}
	}
`;
