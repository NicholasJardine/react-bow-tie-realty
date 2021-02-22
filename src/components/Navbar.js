import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button'
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

const MenuBars = styled.i`
    
`

const NavMenu = styled.i`
    display:flex;
    align-items:center;

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

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">BOWTIE</Logo>

            <MenuBars/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}> 
                    {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
