import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'; 


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bdyclr">
      <Container className='colr'>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='txt' href="#home">Home</Nav.Link>
            <Nav.Link className='txt' href="#features">1.option</Nav.Link>
            <Nav.Link className='txt' href="#pricing">2.option</Nav.Link>
          </Nav>
          <Nav>
            <FontAwesomeIcon className='txt' icon={faCalendarDays} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;