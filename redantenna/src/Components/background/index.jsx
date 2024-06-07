import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BackgroundStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	header {
		display: flex;
		justify-content: center;
		gap: 1rem;
		clear: both;
		width: 80%;
		min-height: 7rem;
		border-radius: 0.5rem;
		z-index: 3;
		margin-top: -35rem;
		display: flex;
		flex-direction: column;
		background-color: ${COLORS.darkPurple + "6d"};
		box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};

		h1 {
			color: ${COLORS.White};
			font-size: ${FONTSIZE.h1};
			font-weight: ${FONTSIZE.weight.bold};
			padding: 0.5rem 0 0;
		}
		h3 {
			color: ${COLORS.White};
			font-size: ${FONTSIZE.a};
			font-weight: ${FONTSIZE.weight.medium};
			padding: 0 0.5rem 0.5rem;
		}
	}

	img {
		width: 100%;
		max-height: 75rem;
	}

	@media screen and (max-width: 1200px) {
		header {
			margin-top: -25rem;
			gap: 0.7rem;
		}
	}

	@media screen and (max-width: 900px) {
		header {
			margin-top: -15rem;
			gap: 0.5rem;
			h1 {
				font-size: ${FONTSIZE.h1Mobile};
				line-height: 2rem;
			}
			h3 {
				font-size: ${FONTSIZE.aMobile};
			}
		}

		img {
			margin-top: 6rem;
		}
	}

	@media screen and (max-width: 600px) {
		header {
			margin-top: -8rem;
		}
	}
`;
