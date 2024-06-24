import styled from "styled-components";

export const DistributorsSectionStyled = styled.section`
	margin: 11rem 0 8rem;
	width: 100%;
	display: flex;
	justify-content: center;
	height: auto;

	ul {
		width: 100%;
		height: 10rem;
		margin: 1rem 0;
		display: flex;
		flex-direction: column;

		li {
			width: 100%;
			height: 5rem;
			ul {
				margin: 0;
				display: flex;
				flex-direction: row;
				justify-content: center;

				li {
					width: 10%;
					padding: 1rem;
					a {
						width: 10rem;
						height: 3rem;

						img {
							width: 10rem;
							height: 3rem;
						}
					}
				}
			}
		}
	}
`;
