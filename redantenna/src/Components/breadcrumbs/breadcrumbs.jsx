import { HashLink as Link } from "react-router-hash-link";
import home from "../../img/home.svg";
import { BreadcrumbsStyled } from ".";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Breadcrumbs = ({ paths }) => {
	return (
		<BreadcrumbsStyled>
			<ul className='breadcrumbs'>
				<li>
					<Link to='/#'>
						<img src={home} alt='Home page' />
					</Link>
				</li>
				{paths.map((path) => {
					return (
						<li key={path.link}>
							<div>
								<b>/</b> <Link to={path.link}>{path.name}</Link>
							</div>
						</li>
					);
				})}
			</ul>
		</BreadcrumbsStyled>
	);
};
