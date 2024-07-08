import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutSectionStyled = styled.section`
	margin: 8rem 0 8rem;
	height: 90vh;
	width: 100%;
	display: flex;
	justify-content: center;
	height: auto;

	article {
		box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};
		display: flex;
		flex-direction: column;
		width: 80%;
		border-radius: 0.5rem;
		overflow: hidden;
		background-color: ${COLORS.White};
		img {
			width: 100%;
			object-fit: cover;
			max-height: 20rem;
		}
		div {
			width: 100%;

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
		margin: 9rem 0 5rem;

		article {
			img {
			}

			div {
			}
		}
	}

	@media screen and (max-width: 900px) {
		article {
			div {
				h2 {
					font-size: ${FONTSIZE.h2Mobile};
				}
				p {
					font-size: ${FONTSIZE.pMobile};
					margin: 1rem 2rem;
				}
			}
		}
	}
`;
