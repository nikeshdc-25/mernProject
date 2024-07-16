import { Col, Container, Row } from "react-bootstrap"
import Footer from "./components/footer"
import Header from "./components/Header"
import Product from "./components/product"
import products from "./products"

function App() {
  return (
    <>
    <Header />
    <Container className="my-3">
      <Row>
        {products.map((product)=>(
          <Col sm={12} md={6} lg={4} xlg={3} key={product.name}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer />
    </>
  )
}

export default App
