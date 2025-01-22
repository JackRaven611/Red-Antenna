import styled from "styled-components";
import { FONTSIZE } from "../../Consts/FontSize";
import { COLORS } from "../../Consts/Colors";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const CatalogStyled = styled.section`
	width: 100%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.headerWrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
		gap: 0;
		h2 {
			width: 90%;
			font-size: ${FONTSIZE.h2};
			font-weight: ${FONTSIZE.weight.bold};
		}
		p {
			margin: 1rem 0 0;
			width: 100%;
			font-size: ${FONTSIZE.p};
			font-weight: ${FONTSIZE.weight.medium};
			text-align: left;
		}
	}

	ul {
		width: 80%;
		display: flex;
		flex-direction: column;
		li {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 3rem;
			margin-bottom: 3rem;
		}

		.placeHolder {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 10rem 0;
			h3 {
				border: 0.2rem solid ${COLORS.mainRed};
				border-radius: 0.5rem;
				font-size: ${FONTSIZE.h2};
				text-align: center;
				padding: 1rem 2rem;
				margin-bottom: 2rem;
				line-height: 2.5rem;
			}
		}
	}

	@media screen and (max-width: 1300px) {
		.headerWrapper {
			h2 {
				font-size: ${FONTSIZE.h2Mobile};
			}
			p {
				font-size: ${FONTSIZE.pMobile};
			}
		}
		ul {
			width: 90%;
			margin: 0;
			li {
				gap: 2rem;
			}
		}
	}
`;
