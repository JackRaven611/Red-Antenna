import styled from "styled-components";

export const CatalogStyled = styled.section`
	width: 100%;
	margin-top: 6.05rem;
	display: flex;
	justify-content: center;

	.headerWrapper {
		display: flex;
		justify-content: center;
		align-items: center;

		h2 {
			margin: 3rem;
		}
	}

	.wireAntennas {
		display: flex;
		justify-content: center;
	}

	ul {
		width: 80%;
		display: flex;
		flex-direction: column;
		li {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 5rem;
		}
	}
`;
