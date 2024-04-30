import { BoxArticleStyled } from ".";

export const BoxArticle = ({ imgUrl, articleText, articleTitle }) => {
	return (
		<BoxArticleStyled>
			<div className='infoWrapper'>
				<img src={imgUrl} alt='article img' />
			</div>
			<h3>{articleTitle}</h3>
			<p>{articleText}</p>
		</BoxArticleStyled>
	);
};
