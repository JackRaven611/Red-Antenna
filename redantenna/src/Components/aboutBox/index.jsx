import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutBoxStyled = styled.section`
	width: 100%;
	margin: 0 0 4rem;
	display: flex;
	justify-content: center;

	div {
		width: 80%;
		background-color: ${COLORS.White};
		box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};
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
				margin: 1rem;
				font-size: ${FONTSIZE.h2Mobile};
			}
			p {
				margin: 0 1.5rem 1.5rem;
				font-size: ${FONTSIZE.pMobile};
			}
		}
	}
`;
