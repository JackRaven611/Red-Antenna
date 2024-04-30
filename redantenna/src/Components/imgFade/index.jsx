import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

export const ImgFadeStyled = styled.div`
	width: 100%;
	height: 30rem;
	z-index: 2;
	background-image: linear-gradient(
		to bottom,
		rgba(255, 0, 0, 0),
		rgb(238, 238, 239, 0.5) 45%,
		${COLORS.White} 90%
	);
	margin-top: -30rem;
`;
