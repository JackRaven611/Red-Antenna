import { ArticleLinkStyled } from ".";
import { Link } from "react-router-dom";
import placeholder from "../../../img/choke balun 02.webp";

const img = { 0: placeholder, 1: placeholder, 2: placeholder };

export const ArticleLink = ({ index, title, content, imageLabels }) => {
	return (
		<ArticleLinkStyled>
			<Link
				to={`/blog/article/${index}`}
				state={{
					content,
					index,
					title,
					coverImg: img[index],
					imageLabels,
				}}
			>
				<img src={img[index]} alt={title} />
				<h3>{title}</h3>
			</Link>
		</ArticleLinkStyled>
	);
};
