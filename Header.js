import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { useState } from 'react';

import settingsicon from '../../assets/images/settings.png';

import falconLogo from '../../assets/images/falcon-logo-1.png';

import impactqalogo from '../../assets/images/imactqa-logo.jpg';

import CreateProject from '../CreateProject';

import ProjectList from '../ProjectList';

import Home from  '../Home';

import Dashboard from '../Dashboard';

import ObjectMap from '../ObjectMap';




function Header() {

  const [showIntegrations, setShowIntegrations] = useState(false);

  const [showNotifications, setShowNotifications] = useState(false);

  const [showProjects, setShowProjects] = useState(false);

  const [showUsers, setShowUsers] = useState(false);

  const [showSettings, setShowSettings] = useState(false);




  const handleIntegrationsToggle = () => {

    setShowIntegrations(!showIntegrations);

  };




  const handleNotificationsToggle = () => {

    setShowNotifications(!showNotifications);

  }




  const handleProjectsToggle = () => {

    setShowProjects(!showProjects);

  };




  const handleUsersToggle = () => {

    setShowUsers(!showUsers);

  };




  const handleSettingsToggle = () => {

    setShowSettings(!showSettings);

  }




  return (

    <div className='App'>

      <>

        <Navbar style={{ backgroundColor: '#000', width:'100%' }} variant='dark'>

          <Container fluid style={{ backgroundColor: '#000' }}>

            <Navbar.Brand as={Link} to='/Home' className='falcon-logo'>

              <img src={falconLogo} alt='Falcon' width='140px' height='40px'  />

            </Navbar.Brand>

            <Nav className='me-auto'>

              <Nav.Link as={Link} to='/Dashboard' style={{ margin:'10px' }}>Dashboard</Nav.Link>

              <NavDropdown

                title='Projects'

                id="dropdown-button-dark-example1"

                show={showProjects}

                onMouseEnter={handleProjectsToggle}

                onMouseLeave={handleProjectsToggle}

                style={{ margin:'10px' }}

              >

                <NavDropdown.Item

                  style={{ color: '#ab9bfb' }}

                  as={Link}

                  to='/CreateProject'

                >

                  Create Project

                </NavDropdown.Item>

                <NavDropdown.Item

                  as={Link}

                  to='/ProjectList'

                  style={{ color: '#ab9bfb' }}

                >

                  Project List

                </NavDropdown.Item>

              </NavDropdown>

              <NavDropdown

                title='Users'

                id='users-dropdown'

                show={showUsers}

                onMouseEnter={handleUsersToggle}

                onMouseLeave={handleUsersToggle}

                style={{ margin:'10px' }}

              >

                <NavDropdown.Item

                  as={Link}

                  to='../CreateUsers'

                  style={{ color: '#ab9bfb' }}

                >

                  Create Users

                </NavDropdown.Item>

                <NavDropdown.Item

                  as={Link}

                  to='../ListUsers'

                  style={{ color: '#ab9bfb' }}

                >

                  Users List

                </NavDropdown.Item>

              </NavDropdown>

            </Nav>

            <NavDropdown

                title={<img src={settingsicon} alt='Settings' style={{ width: '22px', height: '22px', marginRight:'40px', marginLeft:'40px' }} />}

                id='settings-dropdown'

                show={showSettings}

                onMouseEnter={handleSettingsToggle}

                onMouseLeave={handleSettingsToggle}

                style={{ backgroundColor: '#000' }}

              >

                <NavDropdown.Item href='#createUser' style={{ color: '#ab9bfb' }}>Create User</NavDropdown.Item>

                <NavDropdown.Item href='#ManageRoles' style={{ color: '#ab9bfb' }}>Manage Roles</NavDropdown.Item>

                <NavDropdown

                  title='Integrations'

                  id='integrations-dropdown'

                  show={showIntegrations}

                  className='sub-dropdown'

                  onMouseEnter={handleIntegrationsToggle}

                  onMouseLeave={handleIntegrationsToggle}

                  drop='start'

                  onClick={handleIntegrationsToggle}>

                    <div className='subDropDown'>

                  <NavDropdown.Item href='#CICD'>CI/CD</NavDropdown.Item>

                  <NavDropdown.Item href='#DefectTracking'>Defect Tracking</NavDropdown.Item>

                  <NavDropdown.Item href='#CloudSolutions'>Cloud Solutions</NavDropdown.Item>

                  </div>

                </NavDropdown>

                <NavDropdown

                  title='Notifications'

                  id='notifications-dropdown'

                  show={showNotifications}

                  drop='start'

                  className='sub-dropdown mr-auto'

                  onMouseEnter={handleNotificationsToggle}

                  onMouseLeave={handleNotificationsToggle}

                  onClick={handleNotificationsToggle}>

                    <div className='subDropDown'>

                  <NavDropdown.Item href='#Email'>Email</NavDropdown.Item>

                  </div>

                </NavDropdown>

              </NavDropdown>

            <Navbar.Brand

            as={Link}

            to='../Home'

            >

              <img src={impactqalogo} alt='ImpactQA' width='120px' height='30px' />

            </Navbar.Brand>

          </Container>

        </Navbar>




        <br />

      </>

    </div>

  );

}




export default Header;

