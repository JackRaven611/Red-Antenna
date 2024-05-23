import { NotFoundSectionStyled } from "./index";

export const NotFoundSection = () => {
	return (
		<NotFoundSectionStyled>
			<div>
				<h1>ERROR 404</h1>{" "}
				<p>Page you've been trying to access cannot be found</p>
			</div>
		</NotFoundSectionStyled>
	);
};
