import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/react.svg'
import { FaShoppingCart, FaUser } from "react-icons/fa";

function Header(){
    return (
        <header>
            <Navbar variant='dark' bg='dark' expand='md' collapseOnSelect>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt='logo' /> Vaporize Nepal    
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />

                    <Navbar.Collapse id='navbar'>
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            <Nav.Link>
                                <FaUser /> Sign in
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;

