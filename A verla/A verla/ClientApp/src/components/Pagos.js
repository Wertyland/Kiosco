import React from "react";
import { Form , Col , Row , Button } from "react-bootstrap";


const Pagos = () => {


    return(
        <>

        <div>   <h2>Pagos</h2> </div>

        
<Form>
  <Form.Group as={Row} className="mb-3" controlId="totalACobrar">
    <Form.Label column sm={2}>
      Total a Cobrar
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="$" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="pagaCon">
    <Form.Label column sm={2}>
      Paga Con
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="decimal" placeholder="dinero del cliente" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="devolver">
    <Form.Label column sm={2}>
      Devolver
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="decimal" placeholder="Dinero a devolver" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Col} className="mb-1">
      <Form.Label as="legend" column sm={1}>
        Medio de Pago
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="EFECTIVO"
          name="efectivo"
          id="efectivo"
        />
        <Form.Check
          type="radio"
          label="MERCADO PAGO"  
          name="mercadoPago"
          id="mercadoPago"
        />
        <Form.Check
          type="radio"
          label="TARJETA DE CREDITO"
          name="tarjetaCredito"
          id="tarjetaCredito"
        />
      </Col>
    </Form.Group>
  </fieldset>
  

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
    <Button variant="outline-success">Cobrar</Button>{' '}
    </Col>
    <Col sm={{ span: 10, offset: 2 }}>
    <Button variant="outline-danger">Cancelar</Button>{' '}
    </Col>
  </Form.Group>
</Form>





        </>
    )



}
export default Pagos;