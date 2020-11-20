import React, {useState} from 'react'
import { Link }  from 'react-router-dom'
import { Navbar, Container, Column} from 'rbx'
import LogoImagem from '../../assets/images/logo.png'
import "../../styles/Header.scss"

function Header(){
    return(
        <Navbar>
            <Container>
                
                <Navbar.Brand>
                    <Link to="/">
                        <img src={LogoImagem} alt="Logo"/>
                    </Link>
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
                        <Column.Group>
                           <Column>
                                <Link to="/register" className="button is-purple has-text-custom-purple">Register</Link>
                           </Column>
                           <Column>
                                <Link to="/login" className="button is-outlined is-custom-purple">Login</Link>
                           </Column>
                        </Column.Group> 
                    </Navbar.Segment> 
                </Navbar.Menu>

            </Container>
        </Navbar>
    )
}

export default Header;