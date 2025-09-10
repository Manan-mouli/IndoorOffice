import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'; 
import { useNavigate } from 'react-router-dom';
import img from "../assets/pic3.jpg"


function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bdyclr">
      <Container className='colr'>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link onClick={()=>navigate('/toggle')}><h3><FontAwesomeIcon className='txt' icon={faCalendarDays}/></h3></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
