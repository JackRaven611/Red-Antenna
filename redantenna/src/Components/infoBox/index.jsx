import styled from "styled-components";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const InfoBoxStyled = styled.section`
	width: 100%;
	margin-top: 5rem;
	display: flex;
	justify-content: center;

	div {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	@media screen and (max-width: 900px) {
		margin-top: 4rem;
	}
`;
