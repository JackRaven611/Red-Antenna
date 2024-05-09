import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

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
		p {
			margin: 0 0 0.5rem;
		}
	}

	.adress {
		display: flex;
		justify-content: center;
		margin: 0.5rem 0;

		div {
			p {
				margin: 0;
			}

			div {
				display: flex;
				justify-content: space-between;
			}
		}
	}

	.hours {
		display: flex;
		justify-content: center;
		gap: 0.5rem;

		p {
			margin: 0;
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

			h5 {
				margin: 1rem;
				font-size: 1rem;
			}

			p {
				margin: 0.5rem 0;
			}
		}
	}
`;
