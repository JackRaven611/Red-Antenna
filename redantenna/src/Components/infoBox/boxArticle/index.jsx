import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

export const BoxArticleStyled = styled.article`
	z-index: 2;
	width: 30%;
	min-width: 25rem;
	height: auto;
	margin-bottom: 5rem;
	border-radius: 1rem;
	background-image: linear-gradient(
		to bottom,
		${COLORS.Gray + "9d"} 0%,
		rgba(255, 255, 255, 0) 100%
	);
	overflow: hidden;
	box-shadow: 0.5rem 0.5rem 0.5rem ${COLORS.darkPurple + "2d"};

	h3 {
		padding: 2rem 2rem;
		font-size: ${FONTSIZE.h3};
		font-size: ${FONTSIZE.weight.bold};
	}

	p {
		padding: 0 3rem 3rem;
		font-size: ${FONTSIZE.p};
		font-size: ${FONTSIZE.weight.medium};
		text-align: left;
	}

	.infoWrapper {
		width: 100%;
		height: 20rem;

		img {
			width: 100%;
			height: 20rem;
			object-fit: cover;
		}
	}

	@media screen and (max-width: 1500px) {
		width: 45%;
	}

	@media screen and (max-width: 1200px) {
		width: 100%;
		min-width: 20rem;
	}

	@media screen and (max-width: 900px) {
		margin-bottom: 4rem;

		h3 {
			font-size: ${FONTSIZE.h3Mobile};
		}

		p {
			font-size: ${FONTSIZE.pMobile};
		}
	}
`;
