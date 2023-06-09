import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import '../css/Header.css';
import axios from "axios";
import { Link } from "react-router-dom";
import {baseurl} from "./globals"

const ProjectList = () => {
  const [projectData, setProjectData] = useState([]);
  
  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    try {
      let token = "";
      let response = "";
      try {
        response = await axios.post(`${baseurl}/login/`, {
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
        const posts = await axios.get(`${baseurl}/projects/396b2e5e-238d-4647-8f94-0c81296b93e0`, config);
        console.log(posts.data); // This is the projects list
        setProjectData(posts.data.data.projects);
      } catch (err) {
        return err.message;
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <div>
      <div>
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
        </h5>
      </div>
      <div style={{ padding: '0 100px', marginTop: '2%' }}>
        {projectData.length > 0 ? (
          <Table striped bordered hover variant="light" >
            <thead style={{ borderBottom: '2px solid black' }}>
              <tr>
                <th>SNo.</th>
                <th>Project Name</th>
                <th>Description</th>
                <th>Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                  <Link to={
                   `/ProjectList/ProjectPage`
                  }>
                    {item.project_name}
                  </Link>
                  </td>
                  <td>{item.description}</td>
                  <td>{new Date(item.created).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Loading project list...</p>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
