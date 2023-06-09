import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CreateTestCases from "./CreateTestCases";
import ObjectMap from "./ObjectMap";
import ObjectMapComponent from "./ObjectMapComponent";

const ProjectPage = () => {
  const [project, setProject] = useState(null);
  //const PROJECT_ID = useParams();

  /*const fetchProjectData = async () => {
    try {
      let token = "";
      let response = "";
      let PROJECT_ID = "a6024fb0-da78-4b0c-8854-74e85faa5c98";

      try {
        response = await axios.post(`http://3.109.62.213/login/`, {
          "username": "FalconAdminUser",
          "password": "Falcon@$%#Pass123"
        });
        console.log(response.data);
        token = response.data.data.access;
      } catch (err) {
        return err.message;
      }
      
      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const posts = await axios.get(`http://3.109.62.213/project/${PROJECT_ID}`, config); //a6...is Project ID ->fetch it
        console.log('this is the project details: ',posts.data); // This is the projects list
        setProject(posts.data.data.project);
      } catch (err) {
        return err.message;
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };*/

  useEffect(() => {
    setProject(["proj1", "proj description."]);
   // fetchProjectData();
  }, []);

  if (!project) {
    return <p>Loading project details...</p>;
  }

  return (
    <div>
        {/* subheader */}
        <h5 style={{ marginLeft: '6.5%', fontWeight: '600' }}>
        <a
            href="/ProjectList"
            style={{ textDecoration: 'none', color: 'purple' }}
            onMouseEnter={(e) => {e.target.style.textDecoration = 'underline';}}
            onMouseLeave={(e) => {e.target.style.textDecoration = 'none';}}
        >
            Project List
        </a>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <a
            href="#"
            onClick={() => window.location.reload()}
            style={{ textDecoration: 'none', color: '#000' }}
            onMouseEnter={(e) => {
            e.target.style.textDecoration = 'underline';
            e.target.style.color = 'purple';
            }}
            onMouseLeave={(e) => {
            e.target.style.textDecoration = 'none';
            e.target.style.color = '#000';
            }}
        >
            {/* {project.project_name} */}
            Project Name
        </a>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        </h5>
        {/* subheader */}


        <div style={{ marginLeft: '2%', marginTop: '40px' }}>
        <h3>{project.project_name}</h3>
        <p style={{ marginTop: '20px', fontWeight: '600', marginBottom:'30px' }}>
          {project.description}
        </p>
        <Tabs defaultActiveKey="test-cases" id="project-tabs">
          <Tab eventKey="test-cases" title="Test Cases">
            {/* Render Test Cases */}
            <CreateTestCases />
          </Tab>
          <Tab eventKey="object-map" title="Object Map">
            {/* Render Object Map */}
            <ObjectMapComponent />  
          </Tab>
          <Tab eventKey="results" title="Results">
            {/* Render Results */}
          </Tab>
        </Tabs>
      </div>
      {/* Additional rendering of project details */}
    </div>
  );
};

export default ProjectPage;
