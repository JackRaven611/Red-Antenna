import styled from "styled-components";
import { FONTSIZE } from "../../Consts/FontSize";
import { COLORS } from "../../Consts/Colors";

export const CatalogStyled = styled.section`
	width: 100%;
	margin-top: 6.05rem;
	display: flex;
	justify-content: center;

	.headerWrapper {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
		gap: 0;
		h2 {
			margin: 2rem 3rem;
			font-size: ${FONTSIZE.h2};
			font-weight: ${FONTSIZE.weight.bold};
		}
		p {
			width: 90%;
			font-size: ${FONTSIZE.p};
			font-weight: ${FONTSIZE.weight.medium};
			text-align: left;
		}
	}

	.wireAntennas {
		display: flex;
		justify-content: center;
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
			justify-content: space-between;
			gap: 5rem;
		}

		.placeHolder {
			display: flex;
			justify-content: center;
			align-items: center;
			h3 {
				border: 0.2rem solid ${COLORS.mainRed};
				border-radius: 0.5rem;
				font-size: ${FONTSIZE.h2};
				text-align: center;
				padding: 1rem 2rem;
				margin-bottom: 2rem;
			}
		}
	}

	@media screen and (max-width: 900px) {
		.headerWrapper {
			h2 {
				font-size: ${FONTSIZE.h2Mobile};
			}
			p {
				font-size: ${FONTSIZE.pMobile};
			}
		}
	}
`;
