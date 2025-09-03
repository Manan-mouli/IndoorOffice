import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Left side */}
          <Col md={4} className="mb-3">
            <h5>Company Name</h5>
            <p className="small">
              © {new Date().getFullYear()} Company Name. All Rights Reserved.
            </p>
          </Col>

          {/* Middle navigation */}
          <Col md={4} className="mb-3">
            <h6>Quick Links</h6>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light">Home</Nav.Link>
              <Nav.Link href="#about" className="text-light">About</Nav.Link>
              <Nav.Link href="#services" className="text-light">Services</Nav.Link>
              <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
            </Nav>
          </Col>

          {/* Right side (socials or contact) */}
          <Col md={4} className="mb-3">
            <h6>Contact</h6>
            <p className="small">📍 Bhopal, India</p>
            <p className="small">📧 manan11a4116@gmail.com</p>
            <p className="small">📞 +91 91535 29134</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
