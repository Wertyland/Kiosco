import react from 'react';
import { Navbar , Container } from 'react-bootstrap';

const NavBar = () => {

   return(
        <>
          <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      kioskito El turro
      </Navbar.Brand>
      <Navbar.Brand href="/Main">Main</Navbar.Brand>
      <Navbar.Brand href="/Ventas">Ventas</Navbar.Brand>
      <Navbar.Brand href="/Pagos">Pagos</Navbar.Brand>
      <Navbar.Brand href="/BuscarProducto">Buscar Producto</Navbar.Brand>
      <Navbar.Brand href="/">salir</Navbar.Brand>

    </Container>
  </Navbar>





         </>




   )


}
export default NavBar;