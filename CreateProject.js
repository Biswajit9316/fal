import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {baseurl} from './globals'
import axios from "axios";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [project, setProject] = useState("");

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectDescriptionChange = (event) => {
    setProjectDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Project Name:", projectName);
    console.log("Project Description:", projectDescription);
    setProjectDetails(projectName, projectDescription);
  };

  const client = axios.create({
    baseURL: `${baseurl}/project/register`
  })

  const setProjectDetails = async(projName, projDesc) => {

    try{
    let token = ""
    try {
      const response = await axios.post(`${baseurl}/login/`, {
        "username":"FalconAdminUser",
        "password":"Falcon@$%#Pass123"
      });
        console.log(response.data)
        token = response.data.data.access
    } catch (err) {
      return err.message;
    }

    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const payload = {
      account: '396b2e5e-238d-4647-8f94-0c81296b93e0',
      project_name: projName,
      description: projDesc
    };
    console.log("Request Payload:", payload);

    client
      .post('', payload)
      .then((response)=>{
        setProject([response.data, ...project]);
      });
    setProjectName('');
    setProjectDescription('');
  }catch(error){
    console.log("Error occurred: ", error);
  }
  }


  return (
    <div>
      <div>
      <h5 style={{ marginLeft: '6.5%', fontWeight: '600' }}>
        <a
            href="/CreateProject"
            style={{ textDecoration: 'none', color: 'purple' }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {e.target.style.textDecoration = 'none';}}
        >
            Create Project
        </a>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        </h5>
      </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginTop: '1%', alignContent: 'center', fontFamily: 'sans-serif', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '20px', padding: '50px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', width: '60%' }}>
        <Form style={{ width: '100%', padding: '30px' }} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProjectName">
            <Form.Label style={{ fontWeight: 'bold', fontSize: '14px', color: 'black' }}>Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Project Name"
              style={{
                backgroundColor: '#fff',
                color: '#000',
                fontSize: '14px',
                width:'100%',
                borderRadius: '5px',
                border: '2px solid #3D3D80',
                borderBottom: '2px solid #3D3D80',
              }}
              value={projectName}
              onChange={handleProjectNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: 'bold', fontSize: '14px', color: 'black' }}>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Project Description"
              style={{
                backgroundColor: '#fff',
                color: '#000',
                fontSize: '14px',
                width:'100%',
                border: '2px solid #3D3D80',
                borderBottom: '2px solid #3D3D80',
              }}
              value={projectDescription}
              onChange={handleProjectDescriptionChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              minWidth: '0',
              width: '40%',
              height: '40px',
              borderRadius: '5px',
              backgroundColor: '#00a5da',
              border: '1px solid #cfe2f2',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              marginTop: '15px',
              fontFamily: 'inherit',
              fontWeight: 'bold',
            }}
          >
            Create Project
          </Button>
        </Form>
      </div>
    </div>
    </div>
  );
}

export default CreateProject;
