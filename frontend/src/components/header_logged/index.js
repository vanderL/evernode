import React, {useState} from 'react'
import { Navbar, Container, Column, Button, Dropdown} from 'rbx'
import LogoImage from '../../assets/images/logo-white.png'
import "../../styles/Header.scss"
import UserService from '../../services/users'
import { Link, Redirect } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faList } from '@fortawesome/free-solid-svg-icons'

function HeaderLogged(props) {
    const [redirectToHome, setRedirectToHome] = useState(false)

    const logOut = async () => {
        await UserService.logout()
        setRedirectToHome(true)
    }

    if (redirectToHome == true) {
        return <Redirect to={{ pathname: "/" }} />
    }


    return (
        <Navbar color="custom-purple" className="navbar-logged">
            <Navbar.Brand>
                <Column.Group>
                    <Column>
                        <Link to="/notes">
                            <img src={LogoImage} />
                        </Link>
                    </Column>
                </Column.Group>
                
                <Navbar.Burger
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar-menu">
                        <span aria-hidden="true">Setting</span>
                        <span aria-hidden="true">Clube de Vantagens</span>
                        <span aria-hidden="true">Logout </span>
                </Navbar.Burger>

            </Navbar.Brand>

            <Navbar.Menu>
                <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                    <Navbar.Item as="div">

                        <Dropdown>
                            
                            <Dropdown.Trigger>
                                <Button className="button" color="white" outlined>
                                    <span>▼ Vander </span>
                                </Button>
                            </Dropdown.Trigger>

                            <Dropdown.Menu>
                                <Dropdown.Content>

                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">User Edit</Link>
                                    </Dropdown.Item>
                                    
                                    <Dropdown.Divider />

                                    <Dropdown.Item as="div">
                                        <a href="#" onClick={e => logOut()}>LogOut</a>
                                    </Dropdown.Item>

                                </Dropdown.Content>
                            </Dropdown.Menu>

                        </Dropdown>

                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>


        </Navbar>
    )
}

export default HeaderLogged
