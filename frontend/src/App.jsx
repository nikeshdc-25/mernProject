import { Col, Container, Row } from "react-bootstrap"
import Footer from "./components/footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <>
    <Header />
    <Container className="my-3">
      <Outlet/>
    </Container>
    <Footer />
    </>
  )
}

export default App
