import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";

export const BoxArticleStyled = styled.article`
	z-index: 2;
	width: 25rem;
	height: 35rem;
	border-radius: 1rem;
	background-image: linear-gradient(
		to bottom,
		${COLORS.darkPurple + "3d"} 0%,
		rgba(255, 255, 255, 0) 80%
	);
	overflow: hidden;

	h3 {
		padding: 2rem 2rem;
	}

	p {
		padding: 0 2rem;
	}

	.infoWrapper {
		width: 100%;
		height: 20rem;

		img {
			width: 35rem;
			height: 20rem;
		}
	}
`;
