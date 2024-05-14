import { HamburgerStyled } from ".";

export const Hamburger = ({ burgerState }) => {
	return (
		<HamburgerStyled onClick={burgerState}>
			<div className='burger'></div>

			<div to='/about#' className='burger'></div>

			<div to='/contact#' className='burger'></div>

			{/* <li className='burger'><LanguageChangeBtn /></li> */}
		</HamburgerStyled>
	);
};
