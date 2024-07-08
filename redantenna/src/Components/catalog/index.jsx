import styled from "styled-components";
import { FONTSIZE } from "../../Consts/FontSize";
import { COLORS } from "../../Consts/Colors";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const CatalogStyled = styled.section`
	width: 100%;
	margin-top: 6.05rem;
	min-height: 90vh;
	display: flex;
	justify-content: center;

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
			margin: 2rem 0;
			font-size: ${FONTSIZE.h2};
			font-weight: ${FONTSIZE.weight.bold};
		}
		p {
			width: 80%;
			font-size: ${FONTSIZE.p};
			font-weight: ${FONTSIZE.weight.medium};
			text-align: left;
		}
	}

	ul {
		width: 80%;
		display: flex;
		flex-direction: column;
		margin-bottom: 5rem;
		li {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 3.5rem;
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

	@media screen and (max-width: 1200px) {
		.headerWrapper {
			h2 {
				font-size: ${FONTSIZE.h2Mobile};
				margin: 2rem 0 1rem;
			}
			p {
				font-size: ${FONTSIZE.pMobile};
				width: 100%;
			}
		}
		ul {
			li {
				gap: 2rem;
			}
		}
	}
`;
