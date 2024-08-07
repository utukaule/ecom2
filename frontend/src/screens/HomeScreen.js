import React from "react";
import products from "../products";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";
const HomeScreen = () => {
  return (
    <Container>
      <h1>Latest Product</h1>
      <Row>
        {
            products.map((product)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
                </Col>
            ))
        }
      </Row>
    </Container>
  );
};

export default HomeScreen;
