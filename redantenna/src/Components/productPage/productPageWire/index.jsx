import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPageStyled = styled.section`
	margin-top: 6rem;
	background-color: ${COLORS.White};
	min-height: 90vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	.wrapper {
		background-color: ${COLORS.White};
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 5rem 0;
		overflow: hidden;
		border-radius: 0.5rem;

		.selectorkWrapper {
			width: 80%;
			overflow: hidden;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: stretch;

			img {
				width: 50%;
				min-height: 35rem;
				max-height: 35rem;
				object-fit: cover;
				border-radius: 0.5rem;
			}

			aside {
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1rem;

				.linkWrapper {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: row;
				}

				h2 {
					width: 90%;
					text-align: left;
					margin: 2rem 0 1rem 0;
					font-weight: ${FONTSIZE.weight.medium};
					font-size: ${FONTSIZE.h2};
				}

				p {
					width: 90%;
					text-align: left;
					min-height: 15rem;
					padding: 0 0 5rem 0;
					font-weight: ${FONTSIZE.weight.medium};
					font-size: ${FONTSIZE.p};
					border-bottom: solid 0.15rem ${COLORS.Gray};
				}
			}
		}
	}

	a {
		min-width: 15rem;
		padding: 1.5rem;
		margin-top: 2rem;
		border-bottom: solid 0.3rem transparent;
		transition-duration: 0.2s;
		font-weight: ${FONTSIZE.weight.bold};
		font-size: ${FONTSIZE.a};
		text-transform: uppercase;
	}

	a:hover {
		color: ${COLORS.mainRed};
		border-color: ${COLORS.mainRed};
	}

	div {
		display: flex;
		flex-direction: column;

		.infoWrapper {
			display: flex;
			flex-direction: row;
			width: 80%;
			margin: 2rem 0;
			div {
				width: 45%;
				margin: 1rem 2.5% 0;

				h3 {
					font-weight: ${FONTSIZE.weight.bold};
					font-size: ${FONTSIZE.a};
					text-align: center;
					margin-bottom: 1.5rem;
				}

				p {
					font-weight: ${FONTSIZE.weight.medium};
					font-size: ${FONTSIZE.p};
					text-align: left;
				}
			}

			ul {
				display: flex;
				width: 45%;
				flex-direction: column;
				align-items: center;
				margin: 0 2.5%;
				.description {
					width: 100%;
					height: 3.5rem;
					display: flex;
					align-items: center;
					gap: 1rem;
					border-bottom: solid 0.15rem ${COLORS.Gray};

					h3 {
						font-weight: ${FONTSIZE.weight.bold};
						font-size: ${FONTSIZE.p};
						text-align: left;
					}

					p {
						font-weight: ${FONTSIZE.weight.medium};
						font-size: ${FONTSIZE.p};
						text-align: left;
					}
				}
			}
		}

		.redConTitle {
			font-weight: ${FONTSIZE.weight.bold};
			font-size: ${FONTSIZE.a};
			margin: 2rem 0 1rem;
		}

		.redCon {
			display: flex;
			width: 60%;
			flex-direction: column;
			align-items: center;
			margin: 0;
			li {
				width: 100%;
				height: 3.5rem;
				display: flex;
				align-items: center;
				gap: 1rem;
				border-bottom: solid 0.15rem ${COLORS.Gray};

				p {
					font-weight: ${FONTSIZE.weight.medium};
					font-size: ${FONTSIZE.p};
					text-align: left;
				}
			}
		}
	}

	@media screen and (max-width: 1290px) {
		min-height: 50vh;
		.wrapper {
			width: 90%;
			margin: 0;

			.redConTitle {
				font-size: ${FONTSIZE.h3Mobile};
			}

			.redCon {
				width: 90%;
				margin-bottom: 4rem;
				li {
					width: 100%;
					height: 4.5rem;
					display: flex;
					align-items: center;
					gap: 1rem;
					border-bottom: solid 0.15rem ${COLORS.Gray};

					p {
						font-size: ${FONTSIZE.aMobile};
					}
				}
			}

			.infoWrapper {
				flex-direction: column;
				width: 90%;

				div {
					width: 100%;
					margin: 2.5rem 0 1.5rem;

					h3 {
						width: 100%;
					}

					p {
						width: 100%;
					}
				}

				ul {
					width: 100%;
					margin: 1.5rem 0 0;
					.description {
						width: 100%;
						height: 4.5rem;

						h3 {
							font-size: ${FONTSIZE.pMobile};
						}

						p {
							font-size: ${FONTSIZE.pMobile};
						}
					}
				}
			}

			.selectorkWrapper {
				flex-direction: column;
				width: 90%;

				img {
					margin-top: 3.5rem;
					width: 100%;
					min-height: auto;
					max-height: 20rem;
				}

				aside {
					width: 100%;

					h2 {
						font-size: ${FONTSIZE.h2Mobile};
						width: 100%;
						margin: 2rem 0 0;
						text-align: center;
					}

					p {
						font-size: ${FONTSIZE.pMobile};
						width: 100%;
					}
				}
			}
		}
	}

	@media screen and (max-width: 950px) {
		.wrapper {
			width: 90%;
			margin: 0;
			.selectorkWrapper {
				img {
					margin-top: 3.5rem;
				}

				aside {
					h2 {
						font-size: ${FONTSIZE.h2Mobile};
					}

					p {
						font-size: ${FONTSIZE.pMobile};
					}
				}
			}
			.description {
				width: 100%;
				height: 4.5rem;

				h3 {
					font-size: ${FONTSIZE.pMobile};
				}

				p {
					font-size: ${FONTSIZE.pMobile};
				}
			}
		}
	}
`;
