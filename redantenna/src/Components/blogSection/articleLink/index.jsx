import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ArticleLinkStyled = styled.article`
	min-height: 25rem;
	width: 100%;
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition-duration: 0.2s;
	box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};
	border-bottom: solid 0.2rem transparent;

	&&:hover {
		color: ${COLORS.mainRed};
		border-color: ${COLORS.mainRed};

		h3 {
			color: ${COLORS.mainRed};
		}
	}

	img {
		height: 20rem;
		width: 100%;
		object-fit: cover;
	}

	h3 {
		height: 4.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${FONTSIZE.h3};
		font-weight: ${FONTSIZE.weight.bold};
	}
`;
