import { useContext } from "react";
import { LanguageContext } from "../../languageChange/languageContext";
import { BlogArticleStyled } from ".";
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";
import RF10m from "../../../img/Red-Fed 80-10 pasmo 10m.webp";
import RF15m from "../../../img/Red-Fed 80-10 pasmo 15m.webp";
import RF20m from "../../../img/Red-Fed 80-10 pasmo 20m.webp";
import RF40m from "../../../img/Red-Fed 80-10 pasmo 40m.webp";
import RF80m from "../../../img/Red-Fed 80-10 pasmo 80m.webp";
import placeholder from "../../../img/choke balun 02.webp";
import { useLocation } from "react-router-dom";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BlogArticle = () => {
	const { languageData } = useContext(LanguageContext);

	const location = useLocation();
	const index = location.pathname.slice(-1);

	const imgs = [
		[
			{
				img: RF80m,
				description:
					languageData.blogSection.articles[index].imageLabels[0],
			},
			{
				img: RF40m,
				description:
					languageData.blogSection.articles[index].imageLabels[1],
			},
			{
				img: RF20m,
				description:
					languageData.blogSection.articles[index].imageLabels[2],
			},
			{
				img: RF15m,
				description:
					languageData.blogSection.articles[index].imageLabels[3],
			},
			{
				img: RF10m,
				description:
					languageData.blogSection.articles[index].imageLabels[4],
			},
		],
		[],
		[],
	];

	const coverImgs = [
		placeholder,
		placeholder,
		placeholder,
		placeholder,
		placeholder,
		placeholder,
	];

	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "/blog#",
						name: languageData.breadcrumbs.blog,
					},
					{
						link: `/blog/article/${index}`,
						name: languageData.blogSection.articles[index].title,
					},
				]}
			/>
			<BlogArticleStyled>
				<div className='wrapper'>
					<img
						src={coverImgs[index]}
						alt='cover'
						className='coverImg'
					/>
					<div className='textWrapper'>
						<h2>
							{languageData.blogSection.articles[index].title}
						</h2>
						<p>
							{
								languageData.blogSection.articles[index]
									.content[0]
							}
						</p>
						<ul>
							{imgs[index].map((img) => {
								return (
									<li key={img.description}>
										<img
											src={img.img}
											alt={img.description}
										/>
										<p>{img.description}</p>
									</li>
								);
							})}
						</ul>
						{languageData.blogSection.articles[index].content[1] ? (
							<p>
								{
									languageData.blogSection.articles[index]
										.content[1]
								}
							</p>
						) : null}
						{languageData.blogSection.articles[index].content[2] ? (
							<p>
								{
									languageData.blogSection.articles[index]
										.content[2]
								}
							</p>
						) : null}
					</div>
				</div>
			</BlogArticleStyled>
		</>
	);
};
