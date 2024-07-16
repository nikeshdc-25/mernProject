import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/react.svg'
import {  FaShoppingCart, FaUser, FaHouseUser, FaHeart } from "react-icons/fa";
import './Header.css'
    



function Header(){
    return (
        <header>
            <Navbar variant='dark' bg='dark' expand='md' collapseOnSelect>
                    <Navbar.Brand className='px-2'>
                        <img src={logo} alt='logo' /> E-Commerce    
                    </Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls='navbar' />
                    
                    <Navbar.Collapse id='navbar'>
                        <Nav className='ms-auto'>
                            <Nav.Link className='header-underline'>
                                <FaHouseUser /> Home
                            </Nav.Link>
                            <Nav.Link className='header-underline'>
                                <FaShoppingCart /> Cart<div className='nav-cart-count'>0</div> 
                            </Nav.Link>
                            <Nav.Link className='header-underline'>
                                <FaHeart /> Wishlist
                            </Nav.Link>
                            <Nav.Link className='header-underline'>
                                <FaUser /> Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;

