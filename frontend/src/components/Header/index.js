import React, {useState} from 'react'
import { Navbar, Container} from 'rbx'
import LogoImagem from '../../assets/images/logo.png'
import "../../styles/Header.scss"

function Header(){
    return(
        <Navbar>
            <Container>
                
                <Navbar.Brand>
                    <img src={LogoImagem} alt="Logo"/>
                    <Navbar.Burger
                        className="navbar-burger burger"
                        arial-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        Olá 
                    </Navbar.Segment> 
                </Navbar.Menu>

            </Container>
        </Navbar>
    )
}

export default Header;