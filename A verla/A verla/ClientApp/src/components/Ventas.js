import React from "react";
import { Table, Form , Button,Container ,Row,Col } from "react-bootstrap";


const Ventas = () => {

    return(
        <>
        <div> <h2>Ventas</h2> </div>

        <div>
            <img src="./asset/logo.png" alt="logo" width="30px" height="30px" />
        </div>

        <Form>
        <Form.Group className="mb-2"> 
    <Form.Label>Descripcion del Producto</Form.Label>
    <Form.Control placeholder="escribe el producto"  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Buscar
  </Button>
  </Form>

  <br/>


        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Codigo</th>
      <th>Cantidad</th>
      <th>Descripcion</th>
      <th>Sub total</th>
      <th>Eliminar</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>

<br/>
<div>
<Form.Group className="mb-2"> 
    <Form.Label>Precio Total</Form.Label>
    <Form.Control placeholder="achicarlo" disabled />
  </Form.Group>
 
</div>


<div>
<Container>
  <Row md={4}>
    <Col> <Button variant="outline-warning">Carga Monto Manual</Button>{' '}</Col>
    <Col> <Button variant="outline-info">Buscar Producto</Button>{' '}</Col>
    <Col> <Button variant="outline-success">Finalizar Compra</Button>{' '}</Col>
    <Col> <Button variant="outline-danger">Cancelar</Button>{' '}</Col>
  </Row>
</Container>

</div>




        </>        
    )


}
export default Ventas;