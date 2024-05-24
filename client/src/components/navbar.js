import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container >
        <Navbar.Brand to='/'><b>Piligrims<p style={{ fontSize: "75%" }}>virtualvisit</p></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href='/Welcome'>Welcome Page</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Login'>Login </Nav.Link>
            <Nav.Link eventKey={2} href="/Register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default CollapsibleExample;