import { Container, Navbar, Nav, Badge, NavDropdown } from "react-bootstrap";
import logo from "../assets/react.svg";
import {
  FaShoppingCart,
  FaUser,
  FaHouseUser,
  FaHeart,
  FaBell,
} from "react-icons/fa";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
    toast.warn(`Logged Out.`);
  };
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
                  <Badge bg="success" pill>
                    {cartItems.length}
                  </Badge>
                )}
              </NavLink>
              <NavLink to="/wishlist" className="header-underline nav-link">
                <FaHeart /> Wishlist
              </NavLink>
              <NavDropdown title={<FaBell />} id="Notify-dropdown" />
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="Profile-dropdown">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item>Activity</NavDropdown.Item>
                  <NavDropdown.Item>Promo Code</NavDropdown.Item>
                  <NavDropdown.Item>Setting</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink to="/login" className="header-underline nav-link">
                  <FaUser /> Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
