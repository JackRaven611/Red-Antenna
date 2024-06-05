import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const ContactSectionStyled = styled.section`
	margin: 8rem 0;
	height: 45rem;
	width: 100%;
	display: flex;
	justify-content: center;
	height: auto;

	article {
		box-shadow: 0.5rem 0.5rem 0.5rem ${COLORS.darkPurple + "2d"};
		display: flex;
		width: 80%;
		min-height: 30rem;
		border-radius: 0.5rem;
		overflow: hidden;
		background-image: linear-gradient(
			to bottom,
			${COLORS.Gray + "9d"} 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	img {
		width: 50%;
		object-fit: cover;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;

		h2 {
			font-size: ${FONTSIZE.h2};
			font-weight: ${FONTSIZE.weight.bold};
			margin: 2rem;
			text-transform: uppercase;
		}

		ul {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 2rem;
			li {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 3.5rem;
				width: 100%;
				text-align: left;

				h3 {
					min-width: 14rem;
					font-size: ${FONTSIZE.h4};
					font-weight: ${FONTSIZE.weight.bold};
					margin-right: 2rem;
				}

				p {
					font-size: ${FONTSIZE.p};
					font-weight: ${FONTSIZE.weight.medium};
					width: 11.5rem;
				}

				a {
					display: flex;
					align-items: center;
					transition-duration: 0.2s;

					p {
						padding: 0.5rem 0;
						text-align: left;
						font-size: ${FONTSIZE.p};
						font-weight: ${FONTSIZE.weight.medium};
						width: 11.5rem;
						transition-duration: 0.2s;
					}
				}

				a:hover {
					p {
						color: ${COLORS.mainRed};
					}
				}
			}
		}
	}

	@media screen and (max-width: 1200px) {
		margin-bottom: 5rem;

		article {
			flex-direction: column;

			div {
				width: 100%;
				height: auto;
			}

			img {
				width: 100%;
				max-height: 20rem;
			}
		}
	}

	@media screen and (max-width: 900px) {
		div {
			ul {
				li {
					flex-direction: column;
					text-align: center;
					margin-bottom: 2rem;

					h3 {
						margin: 0;
					}

					p {
						width: 100%;
						font-size: ${FONTSIZE.pMobile};
						margin: 1rem;
						text-align: center;
					}

					a {
						p {
							margin: 1rem 0 0;
							text-align: center;
						}
					}
				}

				.adress {
					margin-bottom: 4rem;
				}
			}
		}
	}
`;
