import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

export const FooterStyled = styled.footer`
	width: 100%;
	height: 20rem;
	background-color: ${COLORS.darkPurple};
	color: ${COLORS.White};

	.footerTextColor {
		color: ${COLORS.White};
	}

	ul {
		display: flex;
	}
`;
