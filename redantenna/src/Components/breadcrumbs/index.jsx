import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

export const BreadcrumbsStyled = styled.div`
	margin: 6rem 0 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2rem;

	ul {
		width: 80%;
		min-height: 2rem;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;

		li {
			width: auto;
			height: 2rem;
			font-size: ${FONTSIZE.p};
			font-weight: ${FONTSIZE.weight.medium};

			img {
				height: 2rem;
				padding: 0 0.5rem 0 0;
			}

			img:hover {
				filter: invert(29%) sepia(64%) saturate(7459%)
					hue-rotate(350deg) brightness(97%) contrast(119%);
			}

			div {
				display: flex;
				justify-content: center;
				align-items: center;

				a {
					padding: 0 0.5rem;
					width: 100%;
					height: 2rem;
					display: flex;
					justify-content: center;
					align-items: center;
					transition-duration: 0.2s;
				}

				a:hover {
					color: ${COLORS.mainRed};
				}
			}
		}
	}

	@media screen and (max-width: 1300px) {
		ul {
			width: 90%;
		}
	}
`;
