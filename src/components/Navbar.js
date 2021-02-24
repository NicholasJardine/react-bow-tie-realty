import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button'
import {FaBars} from 'react-icons/fa'
const Nav = styled.nav`
    height:60px;
    display:flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width:100%;
    background:#000;
`

const Logo = styled(Link)`
    color:#fff;
    font-style:italic;
    text-decoration:none;
`

const MenuBars = styled(FaBars)`
  display:none; 
  color:#fff;
  height:32px;
  width:32px;
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  transform: translate(-50%, 25%);
  @media screen and (max-width:768px){
    display:block;
} 
`

const NavMenu = styled.i`
    display:flex;
    align-items:center;
    margin-right:-48px;

    @media screen and (max-width:768px){
        display:none;
    }
`

const NavMenuLinks = styled(Link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
height:100%;
cursor:pointer;
padding:0 1rem;
`;

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right: 24px;
    @media screen and (max-width:768px){
        display:none;
    }
`;


const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">BOWTIE</Logo>

            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}> 
                    {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
