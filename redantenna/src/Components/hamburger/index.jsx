import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const HamburgerStyled = styled.div`
	width: 2rem;
	height: 2rem;
	margin-right: 5%;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
	text-align: right;

	@media screen and (min-width: 1300px) {
		display: none;

		.burger:hover {
			background-color: ${COLORS.mainRed};
		}
	}
`;
