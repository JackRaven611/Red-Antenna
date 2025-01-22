import styled from "styled-components";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const InfoBoxStyled = styled.section`
	width: 100%;
	margin-top: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	div {
		width: 80%;
		display: flex;
		gap: 2.5%;
		justify-content: center;
	}

	@media screen and (max-width: 1300px) {
		div {
			flex-direction: column;
			width: 90%;
		}
	}

	@media screen and (max-width: 900px) {
		margin-top: 4rem;
	}
`;
