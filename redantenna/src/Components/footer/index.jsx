import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const FooterStyled = styled.footer`
	width: 100%;
	height: 20rem;
	background-color: ${COLORS.darkPurple};
	color: ${COLORS.White};
	display: flex;
	justify-content: center;
	align-items: center;

	.footerTextColor {
		color: ${COLORS.White};
	}
	.contactWrapper {
		display: flex;
		gap: 2rem;
	}

	.contactIcon {
		display: flex;
		align-items: center;
	}

	.adress {
		display: flex;
		justify-content: center;
		margin: 0.5rem 0;
		min-width: 20rem;

		p {
			margin: 0;
			width: 70%;
			transition-duration: 0.2s;
		}
	}

	.adress {
		p:hover {
			color: ${COLORS.mainRed};
		}
	}

	img {
		width: 1.2rem;
		margin-right: 0.5rem;
	}

	ul {
		display: flex;
		justify-content: space-between;
		width: 80%;
		gap: 2rem;

		li {
			max-width: 30rem;

			h4 {
				margin: 1rem;
				font-size: ${FONTSIZE.h4};
				font-size: ${FONTSIZE.weight.bold};
			}

			p {
				margin: 0.5rem 0;
				font-size: ${FONTSIZE.p};
				font-size: ${FONTSIZE.weight.medium};
			}
		}
	}

	@media screen and (max-width: 1300px) {
		height: auto;
		margin-top: 4rem;

		.contactWrapper {
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}

		ul {
			margin: 2rem 0;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}

	@media screen and (max-width: 900px) {
		.footerTextColor {
			font-size: ${FONTSIZE.pMobile};
		}
	}
`;
