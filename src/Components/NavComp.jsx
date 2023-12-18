import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">COURSES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        
            <NavDropdown title="LIVECLASSES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">LiveClasses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                OnGoing Session
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Meetings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Recorded Sessions
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PRACTICE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CodeKeta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ZenClass
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Task</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Submissions
              </NavDropdown.Item>
            </NavDropdown> <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> <NavDropdown title="OURPRODUCT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;