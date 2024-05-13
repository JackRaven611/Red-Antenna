import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

export const BoxArticleStyled = styled.article`
	z-index: 2;
	width: 30%;
	min-width: 25rem;
	height: 35rem;
	margin-bottom: 5rem;
	border-radius: 1rem;
	background-image: linear-gradient(
		to bottom,
		${COLORS.Gray + "3d"} 0%,
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
		padding: 0 2rem;
		font-size: ${FONTSIZE.p};
		font-size: ${FONTSIZE.weight.medium};
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
	}
`;
