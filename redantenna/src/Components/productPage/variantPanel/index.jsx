import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const VariantPanelStyled = styled.div`
	width: 90%;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: center;

	&&.variant {
		flex-direction: row;
	}

	select {
		background-color: transparent;
		border: none;
		margin-right: 0.5rem;
		height: 2.3rem;
		width: 6rem;
		text-align: center;
		font-size: ${FONTSIZE.p};
		font-weight: ${FONTSIZE.weight.bold};
		transition-duration: 0.2s;
		border-bottom: solid 0.15rem ${COLORS.darkPurple};
	}

	select:hover {
		color: ${COLORS.mainRed};
		border-color: ${COLORS.mainRed};
	}

	.checkboxes {
		width: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 1rem;
		margin: 1rem 2rem;

		li {
			display: flex;

			label {
				border-radius: 0.5rem;
				padding: 0.2rem 1rem;
				margin: 0;
				font-size: ${FONTSIZE.p};
				font-weight: ${FONTSIZE.weight.bold};
				border: solid 0.15rem ${COLORS.darkPurple};
				transition-duration: 0.2s;
			}

			label:hover {
				border-color: ${COLORS.mainRed};
				color: ${COLORS.mainRed};
			}

			.label {
				border-color: ${COLORS.mainRed};
				color: ${COLORS.mainRed};
			}

			input {
				opacity: 0;
				position: absolute;
			}
		}
	}

	@media screen and (max-width: 1290px) {
		width: 100%;
		justify-content: center;
		margin: 1rem 0;

		.checkboxes {
			margin: 0;
			gap: 0.5rem;
		}
	}

	@media screen and (max-width: 420px) {
		margin: 0.5rem 0;

		select {
			margin: 0 1rem 1rem;
		}

		.checkboxes {
			li {
				label {
					padding: 0 0.5rem;
				}
			}
		}
	}
`;
