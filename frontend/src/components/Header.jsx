import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import logo from "../assets/react.svg";
import { FaShoppingCart, FaUser, FaHouseUser, FaHeart } from "react-icons/fa";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="md" collapseOnSelect>
        <NavLink to="/" className="navbar-brand">
          <Navbar.Brand className="px-2">
            <img src={logo} alt="logo" /> eCart
          </Navbar.Brand>
        </NavLink>

        <Container>
          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <NavLink to="" className="header-underline nav-link">
                <FaHouseUser /> Home
              </NavLink>
              <NavLink to="/cart" className="header-underline nav-link">
                <FaShoppingCart /> Cart{" "}
                {cartItems.length > 0 && (
                    <Badge bg='success' pill>{cartItems.length}</Badge>
                )}
              </NavLink>
              <NavLink to="/wishlist" className="header-underline nav-link">
                <FaHeart /> Wishlist    
              </NavLink>
              <NavLink to="/login" className="header-underline nav-link">
                <FaUser /> Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
