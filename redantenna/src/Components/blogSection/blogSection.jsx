import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { BlogSectionStyled } from ".";
import { ArticleLink } from "./articleLink/articleLink";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BlogSection = () => {
	const { languageData } = useContext(LanguageContext);
	const blogSection = languageData.blogSection;

	return (
		<BlogSectionStyled>
			<h2>{blogSection.header}</h2>
			<ul>
				{blogSection.articles.map((article) => {
					return (
						<li>
							<ArticleLink
								index={article.index}
								title={article.title}
								content={article.content}
								imageLabels={article.imageLabels}
								key={article.index}
							/>
						</li>
					);
				})}
			</ul>
		</BlogSectionStyled>
	);
};
