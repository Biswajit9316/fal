  import './css/App.css';
  import './css/Header.css'
  import CreateTestSteps from './components/CreateTestSteps'
  import CreateTestCases from './components/CreateTestCases'
  import Header from './components/baseComponents/Header';
  import HeaderTemp from './components/baseComponents/HeaderTemp';
  import RegistrationForm from './components/RegistrationForm'
  import { useState } from 'react';
  import ProjectList from './components/ProjectList';
  import CreateProject from './components/CreateProject';
  import ObjectMap from './components/ObjectMap';
  import Dashboard from './components/Dashboard';
  import LandingPage from './components/LandingPage';
  import Home from './components/Home';
  import LoginPage from './components/LoginPage';
  import ProjectPage from './components/ProjectPage';
  import Modal from './components/Modal'
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import ObjectRepository from './components/ObjectRepository';
  import { ProjectProvider } from './components/ProjectContext';
import ObjectMapComponent from './components/ObjectMapComponent';

  let isLoggedIn = false;
  let setIsLoggedIn;
  export function handleLogin() {
    // Perform login logic and set the isLoggedIn state to true
    setIsLoggedIn(true);
  }
  
  export function handleLogout() {
    // Perform logout logic and set the isLoggedIn state to false
    setIsLoggedIn(false);
  }

    function App() {

      const [loggedIn, setLoggedIn] = useState(isLoggedIn);
      setIsLoggedIn = setLoggedIn;
      isLoggedIn = loggedIn;


      //FINAL
      if (isLoggedIn) {
        return (
          <div className="bg">
            {/* <ProjectProvider>
          <Router>
          <Header/>
            <div />
            <Routes>
              <Route exact path="/ProjectList/ProjectPage" element={<ProjectPage/>} />
              <Route exact path="/Home" element={<Home/>} />
              <Route exact path="/Dashboard" element={<Dashboard/>} />
              <Route exact path="/CreateProject" element={<CreateProject/>} />
              <Route exact path='/ProjectList' element={<ProjectList/>} />
              <Route exact path='/ObjectMap' element={<ObjectMap/>} />
              <Route exact path='/CreateTestSteps' element={<CreateTestSteps/>} />
            </Routes>
            </Router>
            </ProjectProvider> */}
            <CreateTestSteps />
            </div>
        );
      } else {
        return (
          <>
        <div>
          <Router>
            <Routes>
              <Route exact path='/LoginPage' element={<LoginPage />} />
              <Route path='/' element={<LandingPage />} />
            </Routes>
          </Router>
        </div>
      </>
        );
        }


        //TRIAL
        /*return (
          <div className="bg">
            <ProjectProvider>
          <Router>
          <Header/>
            <div />
            <Routes>
              <Route exact path="/ProjectList/ProjectPage" element={<ProjectPage/>} />
              <Route exact path="/Home" element={<Home/>} />
              <Route exact path="/Dashboard" element={<Dashboard/>} />
              <Route exact path="/CreateProject" element={<CreateProject/>} />
              <Route exact path='/ProjectList' element={<ProjectList/>} />
              <Route exact path='/ObjectMap' element={<ObjectMap/>} />
            </Routes>
            </Router>
            </ProjectProvider>
            </div>
        )*/
    }

    export default App
