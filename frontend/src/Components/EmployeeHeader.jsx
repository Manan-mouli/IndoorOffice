import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/EmployeeHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'; 
import { useNavigate } from 'react-router-dom';

function EmployeeHeader() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" collapseOnSelect sticky="top" className="bdyclr">
      <Container className="colr">
        {/* Logo / Brand */}
        <Navbar.Brand href="#home" className="txt">
          <div className="logo-container">
            <FontAwesomeIcon
              className="logo-icon"
              icon={faCalendarDays}
            />
          </div>
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Nav links */}
            <Nav.Link href="/" className="txt">Home</Nav.Link>
            <Nav.Link href="#link" className="txt">Teams</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EmployeeHeader;
