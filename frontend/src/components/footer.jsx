import { Container } from "react-bootstrap";

function Footer(){
    let currentYear = new Date().getFullYear();
    return(
        <footer>
            <Container>
                <p className="text-center p-3">VaporizeNepal &copy; All Rights Preserved {currentYear}!</p>
            </Container>
        </footer>
    )
}

export default Footer;