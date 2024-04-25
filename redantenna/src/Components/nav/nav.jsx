import { NavStyled } from '.';
import { TEXTS } from '../../Consts/texts';


export const Nav = () => {return <NavStyled><ul>
    <li><a className="homeButton" href=""><h1>${TEXTS.english.brandName}</h1><p>${TEXTS.english.homeBtnP}</p></a>
</li>
    <li><a className="navButtons" href="">${TEXTS.english.navBtnProducts}</a></li>
    <li><a className="navButtons" href="">${TEXTS.english.navBtnAbout}</a></li>
    <li><a className="navButtons" href="">${TEXTS.english.navBtnContact}</a></li>
    
  </ul></NavStyled>}
