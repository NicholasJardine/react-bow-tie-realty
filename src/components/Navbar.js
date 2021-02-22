import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
const Nav = styled.nav`
    height:60px;
    background:red;
    display:flex;
    
`
const Logo = styled(Link)`
    color:#fff
`
const MenuBars = styled.i`
    
`

const NavMenu = styled.i`
    
`

const NavMenuLinks = styled(Link)`
    color:#fff;   
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
        </Nav>
    )
}

export default Navbar
