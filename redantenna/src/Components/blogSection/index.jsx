import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const BlogSectionStyled = styled.section`
	min-height: 90vh;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	h2 {
		margin: 0 0 1rem;
		font-size: ${FONTSIZE.h2};
		font-weight: ${FONTSIZE.weight.bold};
	}

	ul {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		gap: 2.5%;
		justify-content: center;
		margin: 0;

		li {
			width: 48.75%;
			margin: 0 0 3rem;
		}
	}

	@media screen and (max-width: 1300px) {
		ul {
			width: 90%;
			flex-direction: column;

			li {
				width: 100%;
				margin: 0 0 3rem;
			}
		}
	}
`;
