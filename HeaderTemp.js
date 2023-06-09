
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import falconLogo from '../../assets/images/falcon-logo.png';
import impactqalogo from '../../assets/images/imactqa-logo.jpg';

function HeaderTemp() {

  return (
    <div className='App'>
      <>
        <Navbar style={{ width:'100%' }} variant='dark'>
          <Container fluid >
            <Navbar.Brand className='falcon-logo'>
              <img src={falconLogo} alt='Falcon' width='140px' height='40px'  />
            </Navbar.Brand>
            <Navbar.Brand >
              <img src={impactqalogo} alt='ImpactQA' width='120px' height='30px' />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
      </>
    </div>
  );
}

export default HeaderTemp;
