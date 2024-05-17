import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const AboutBoxStyled = styled.section`
	width: 100%;
	margin: 0 0 4rem;
	display: flex;
	justify-content: center;

	div {
		width: 80%;
		background-image: linear-gradient(
			to bottom,
			${COLORS.Gray + "3d"} 0%,
			rgba(255, 255, 255, 0) 100%
		);
		box-shadow: 0.5rem 0.5rem 0.5rem ${COLORS.darkPurple + "2d"};
		border-radius: 0.5rem;
		overflow: hidden;

		img {
			object-fit: cover;
			width: 100%;
			height: 20rem;
		}

		h2 {
			margin: 2rem;
			font-size: ${FONTSIZE.h2};
			font-weight: ${FONTSIZE.weight.bold};
		}

		p {
			margin: 0 3rem 3rem;
			font-size: ${FONTSIZE.p};
			font-weight: ${FONTSIZE.weight.medium};
			text-align: left;
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
