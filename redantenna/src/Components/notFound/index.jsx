import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const NotFoundSectionStyled = styled.section`
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		width: 80%;

		h1 {
			color: ${COLORS.mainRed};
			font-size: ${FONTSIZE.h1};
			font-weight: ${FONTSIZE.weight.bold};
			width: 80%;
			line-height: 3rem;
			text-align: center;
			width: 100%;
		}

		p {
			font-size: ${FONTSIZE.p};
			font-weight: ${FONTSIZE.weight.bold};
			text-align: center;
			width: 100%;
		}
	}

	@media screen and (max-width: 900px) {
		div {
			h1 {
				font-size: ${FONTSIZE.h1Mobile};
			}

			p {
				font-size: ${FONTSIZE.pMobile};
			}
		}
	}
`;
