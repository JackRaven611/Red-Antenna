import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";

export const ProductStyled = styled.article`
	width: 45%;
	border-radius: 1rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition-duration: 0.2s;

	a {
		max-width: 80%;
		position: relative;
		padding: 1.5rem;
		margin: 2rem 0 0 3rem;
		border-bottom: solid 0.3rem ${COLORS.darkPurple};
		transition-duration: 0.2s;
		font-weight: 700;
		text-transform: uppercase;
		font-size: 1.5rem;
	}

	a:hover {
		color: ${COLORS.mainRed};
		border-color: ${COLORS.mainRed};
	}

	img {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		transition-duration: 0.2s;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-image: linear-gradient(
			to bottom,
			${COLORS.darkPurple + "1d"} 0%,
			rgba(255, 255, 255, 0) 80%
		);
		transition-duration: 0.2s;

		h3 {
			margin: 1.5rem 2rem;
		}

		h4 {
			margin: -0.5rem 2rem 1rem;
		}

		ul {
			width: 100%;
			li {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 100%;
				gap: 0;

				ul {
					height: 20rem;
				}

				p {
					padding: 0.2rem 3rem;
					text-align: left;
				}
			}
		}
	}
`;
