import { ArticleLinkStyled } from ".";
import { Link } from "react-router-dom";
import placeholder from "../../../img/choke balun 02.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ArticleLink = ({ index, title }) => {
	const img = [placeholder, placeholder, placeholder];

	return (
		<ArticleLinkStyled>
			<Link to={`/blog/article/${index}`}>
				<img src={img[index]} alt={title} />
				<h3>{title}</h3>
			</Link>
		</ArticleLinkStyled>
	);
};
