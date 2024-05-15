import styled from "styled-components";
import { FONTSIZE } from "../../Consts/FontSize";

export const CatalogStyled = styled.section`
	width: 100%;
	margin-top: 6.05rem;
	display: flex;
	justify-content: center;

	.headerWrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 5rem;
		h2 {
			margin: 1rem 3rem 0;
			font-size: ${FONTSIZE.h2};
			font-weight: ${FONTSIZE.weight.bold};
		}
		p {
			width: 90%;
			font-size: ${FONTSIZE.p};
			font-weight: ${FONTSIZE.weight.medium};
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
		li {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 5rem;
		}
	}

	@media screen and (max-width: 1200px) {
	}
`;
