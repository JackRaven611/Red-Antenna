import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BoxArticleStyled = styled.article`
	z-index: 2;
	width: 31.6%;
	height: auto;
	border-radius: 0.5rem;
	background-color: ${COLORS.White};
	overflow: hidden;
	box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};

	h3 {
		padding: 2rem 2rem 1rem;
		line-height: 1.7rem;
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

	@media screen and (max-width: 1300px) {
		width: 100%;
		min-width: 20rem;
		margin: 0 0 3rem;

		h3 {
			padding: 1rem;
		}

		p {
			padding: 0 1.5rem 1.5rem;
		}

		.infoWrapper {
			height: 15rem;

			img {
				height: 15rem;
			}
		}
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
