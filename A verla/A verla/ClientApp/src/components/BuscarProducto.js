import React from "react";
import { Form, Row, Table, Button, Col } from "react-bootstrap";


const BuscarProducto = () => {

    return(

        <>
        <div>

        <h2>Buscar Producto</h2>


        </div>
        
        <Form>
        <Form.Group className="mb-3" controlId="BuscarDescripcion">
    <Form.Label>Buscar por Descripcion</Form.Label>
    <Form.Control placeholder="Introdusca producto" />
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="BuscarCodigo">
      <Form.Label>Buscar por codigo</Form.Label>
      <Form.Control type="number" placeholder="ponga su codigo" />
    </Form.Group>

    <Form.Group as={Col} controlId="FiltrarCategoria">
      <Form.Label>Filtrar por categoria</Form.Label>
      <Form.Control type="text" placeholder="Categoria" />
    </Form.Group>
  </Row>

</Form>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Codigo</th>
      <th>Precio Unitario</th>
      <th>Descripcion</th>
      <th>Stock</th>
      <th>Categoria</th>
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
    <td></td>

    </tr>
  </tbody>
</Table>
<Button variant="outline-success">Cargar</Button>{' '}
<Button variant="outline-danger">Cancelar</Button>
        </>


    )



}
export default BuscarProducto;
