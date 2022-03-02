import react from 'react';
import { Row ,Col, Container, Button } from 'react-bootstrap';

const Main = () => {
  return (
    <>
        <div>
            <img src="./asset/logo.png" alt="logo" width="450px" height="300px" />
        </div>



      <Container>
  
  <Row>
    <Col>  <Button variant="outline-primary">Nueva Venta</Button>{' '} </Col>
    <Col>  <Button variant="outline-secondary">Productos y Stock</Button>{' '}</Col>
    <Col>  <Button variant="outline-danger">Ingresos Externos</Button>{' '}</Col>
  </Row>
  <br/>
  <Row>
    <Col><Button variant="outline-info">Ventas y Facturacion</Button>{' '}</Col>
    <Col><Button variant="outline-warning">Pago a Provedores</Button>{' '}</Col>
    <Col><Button variant="success">Dinero en caja</Button>{' '}</Col>
  </Row>
</Container>
    </>
  );
}

export  default Main;