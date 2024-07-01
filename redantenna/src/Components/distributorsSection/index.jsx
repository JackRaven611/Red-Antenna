import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const DistributorsSectionStyled = styled.section`
	margin: 11rem 0 8rem;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: 90vh;

	h2 {
		width: 100%;
		height: 3rem;
		font-weight: ${FONTSIZE.weight.bold};
		font-size: ${FONTSIZE.h2};
	}

	ul {
		width: 80%;
		height: auto;
		margin: 1rem 0;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};

		li {
			width: 100%;
			height: auto;
			margin: 1rem 0;
			display: flex;
			flex-direction: column;
			align-items: center;

			h3 {
				width: 80%;
				padding: 1.5rem;
				font-weight: ${FONTSIZE.weight.medium};
				font-size: ${FONTSIZE.h3};
				border-bottom: solid 0.15rem ${COLORS.Gray};
			}

			ul {
				width: 100%;
				margin: 0;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				height: auto;
				padding: 1rem 0;
				box-shadow: none;

				li {
					width: 10rem;
					height: 5rem;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: row;
					a {
						width: 100%;
						height: 5rem;

						img {
							width: 100%;
							height: 5rem;
							object-fit: cover;
							border-radius: 0.5rem;
						}
					}
				}
			}
		}
	}
`;
