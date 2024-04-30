import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

export const AboutBoxStyled = styled.section`
	width: 100%;
	margin: 5rem 0 10rem;
	display: flex;
	justify-content: center;
	div {
		width: 80%;
		background-image: linear-gradient(
			${COLORS.darkPurple + "3d"} 0%,
			rgba(255, 255, 255, 0) 100%
		);
		border-radius: 1rem;
		overflow: hidden;

		img {
			object-fit: cover;
			width: 100%;
			height: 20rem;
		}

		h2 {
			padding: 3rem;
		}

		p {
			padding: 0 3rem 2rem;
		}
	}
`;
