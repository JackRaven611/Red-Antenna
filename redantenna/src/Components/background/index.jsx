import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

export const BackgroundStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	header {
		display: flex;
		justify-content: center;
		clear: both;
		width: 80%;
		height: 10rem;
		border-radius: 1rem;
		z-index: 3;
		margin-top: -35rem;
		font-size: 2rem;
		display: flex;
		flex-direction: column;
		background-color: ${COLORS.darkPurple + "6d"};

		h1 {
			color: ${COLORS.White};
		}
		p {
			color: ${COLORS.White};
			font-size: 1.9rem;
		}
	}

	img {
		width: 100%;
		max-height: 75rem;
		z-index: 1;
	}
`;
