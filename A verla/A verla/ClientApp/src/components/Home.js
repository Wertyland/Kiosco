import react from 'react';
import { Form , Button  } from 'react-bootstrap';
 

const Inicio = () => {

    return(
        <>
        <div>
            <img src="./asset/logo.png" alt="logo" width="450px" height="300px" />
        </div>

        




        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type="email" placeholder="Introdusca su E-mail" />
    <Form.Text className="text-muted">
    Nunca compartiremos su correo electrónico con nadie más.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Ingresar
  </Button>
</Form>
          
        
        
        </>

    )


}
export default Inicio;
