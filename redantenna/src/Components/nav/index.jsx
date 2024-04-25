import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

export const NavStyled = styled.nav`
    background-color: ${COLORS.floralWhite};
    color: ${COLORS.darkPurple};
    width: 100%;
    height: 6.25rem;
    position: fixed;
    display: flex;
    justify-content: center;
    ul{
        
        width:80%;
        display: flex;
        justify-content: space-between;};
        

    li{
        display: flex;
        
        a{
            width: 100%;
            align-self: center;
            padding: 2.1rem 3rem;
            border-bottom: solid 4px ${COLORS.floralWhite};
            font-size: 1.5rem;
            transition-duration: 0.2s;

            h1{
                font-size: 2.3rem;
            }

            p{
                font-size: 1rem;
            }
        }

        .homeButton{
            padding: 0.5rem 3rem;
        }

        .navButtons:hover{
            color: ${colors.mainRed};
            border-bottom: solid 4px ${COLORS.mainRed}
        }
        
        

    }
`