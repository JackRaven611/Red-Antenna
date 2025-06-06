import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const CarouselStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	overflow: hidden;
	width: 80%;

	.disabled {
		cursor: default;
		div {
			border-color: ${COLORS.Gray};
		}
	}
	.disabled:hover {
		div {
			border-color: ${COLORS.Gray};
		}
	}

	button {
		height: 4rem;
		width: 4rem;
		border: none;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

		.left {
			transform: rotate(45deg);
			position: relative;
			left: 12.5%;
		}

		.right {
			transform: rotate(225deg);
			position: relative;
			right: 12.5%;
		}

		div {
			height: 2rem;
			width: 2rem;
			border-radius: 0.15rem;
			border-bottom: 0.3rem solid ${COLORS.darkPurple};
			border-left: 0.3rem solid ${COLORS.darkPurple};
			transition-duration: 0.2s;
		}
	}

	button:hover {
		div {
			border-color: ${COLORS.mainRed};
		}
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		width: 100%;

		.hidden {
			display: none;
		}

		li {
			width: 100%;
			height: auto;
			margin: 0 0 1.5rem;
			border-radius: 0.5rem;
			object-fit: cover;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};

			div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;

				img {
					width: 100%;
					max-height: 30rem;
					object-fit: cover;
				}

				h4 {
					text-align: center;
					width: 50%;
					margin: 1rem 0 0.5rem 0;
					font-size: ${FONTSIZE.h3};
					font-weight: ${FONTSIZE.weight.bold};
				}

				p {
					text-align: center;
					width: 90%;
					margin: 0 0 1rem 0;
					font-size: ${FONTSIZE.p};
					font-weight: ${FONTSIZE.weight.bold};
				}
			}
		}
	}

	@media screen and (max-width: 900px) {
		width: 95%;

		ul {
			li {
				div {
					h4 {
						width: 100%;
						font-size: ${FONTSIZE.h3Mobile};
						font-weight: ${FONTSIZE.weight.bold};
					}

					p {
						width: 100%;
						font-size: ${FONTSIZE.pMobile};
						font-weight: ${FONTSIZE.weight.medium};
					}
				}
			}
		}
	}
`;
