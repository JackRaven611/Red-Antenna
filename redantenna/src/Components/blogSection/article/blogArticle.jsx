import { BlogArticleStyled } from ".";
import { useLocation } from "react-router-dom";
import RF10m from "../../../img/Red-Fed 80-10 pasmo 10m.webp";
import RF15m from "../../../img/Red-Fed 80-10 pasmo 15m.webp";
import RF20m from "../../../img/Red-Fed 80-10 pasmo 20m.webp";
import RF40m from "../../../img/Red-Fed 80-10 pasmo 40m.webp";
import RF80m from "../../../img/Red-Fed 80-10 pasmo 80m.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BlogArticle = () => {
	const location = useLocation();
	const { index, title, content, coverImg, imageLabels } = location.state;

	const imgs = [
		[
			{ img: RF80m, description: imageLabels[0] },
			{ img: RF40m, description: imageLabels[1] },
			{ img: RF20m, description: imageLabels[2] },
			{ img: RF15m, description: imageLabels[3] },
			{ img: RF10m, description: imageLabels[4] },
		],
	];

	return (
		<BlogArticleStyled>
			<div className='wrapper'>
				<img src={coverImg} alt='cover' className='coverImg' />
				<div className='textWrapper'>
					<h2>{title}</h2>
					<p>{content[0]}</p>
					<ul>
						{imgs[index].map((img) => {
							return (
								<li>
									<img src={img.img} alt={img.description} />
									<p>{img.description}</p>
								</li>
							);
						})}
					</ul>
					{content[1] ? <p>{content[1]}</p> : null}
					{content[2] ? <p>{content[2]}</p> : null}
				</div>
			</div>
		</BlogArticleStyled>
	);
};
