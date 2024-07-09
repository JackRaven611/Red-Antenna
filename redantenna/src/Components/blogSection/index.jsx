import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const BlogSectionStyled = styled.section`
	margin: 8rem 0;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	h2 {
		margin: 0 0 3rem;
		font-size: ${FONTSIZE.h2};
		font-weight: ${FONTSIZE.weight.bold};
	}

	ul {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		gap: 5%;
		justify-content: center;
		margin: 0;

		li {
			width: 47.25%;
			margin: 0 0 4.5rem;
		}
	}
`;
