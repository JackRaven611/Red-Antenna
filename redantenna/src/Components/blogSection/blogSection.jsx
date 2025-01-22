import { useContext } from "react";
import { LanguageContext } from "../languageChange/languageContext";
import { BlogSectionStyled } from ".";
import { ArticleLink } from "./articleLink/articleLink";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BlogSection = () => {
	const { languageData } = useContext(LanguageContext);
	const blogSection = languageData.blogSection;

	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "",
						name: languageData.breadcrumbs.blog,
					},
				]}
			/>
			<BlogSectionStyled>
				<h2>{blogSection.header}</h2>
				<ul>
					{blogSection.articles.map((article) => {
						return (
							<li key={article.title}>
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
		</>
	);
};
