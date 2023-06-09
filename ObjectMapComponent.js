import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import deleteicon from '../assets/images/delete.png';
import editicon from '../assets/images/edit.png';
import addRow from '../assets/images/add.png';
import axios from "axios";
import { useEffect } from "react";
import { baseurl } from "./globals";

const ObjectMapComponent = () =>{
    const [locatorType, setLocatorType] = useState([])
    const [objectData, setObjectData] = useState([]);
    const [object, setObject] = useState([]);
    const [objectName, setObjectName] = useState([]);
    const [objectValue, setObjectValue] = useState([]);
    const [objectType, setObjectType] = useState([]);
    const [page_Name, setpage_Name] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const PROJECT_ID = "a6024fb0-da78-4b0c-8854-74e85faa5c98";
    const client = axios.create({
      baseURL: `${baseurl}/object/register`
    })

    const handleObjectName = (event) => {
      setObjectName(event.target.value);
    };

    const handleObjectValue = (event) => {
      setObjectValue(event.target.value);
    }
  
    const handleObjectType = (event) => {
      setObjectType(event.target.value);
    };
    const handlePageName = (event) => {
      setpage_Name(event.target.value);
    };
    
    useEffect(() => {
      const setObjectRowValues = async () => {
        try {
          await fetchObjects(); // Fetch objects from the API
          const objectRows = objectData.map((item, index) => ({
            id: index + 1,
            pageName: item.page_name,
            elementName: item.object_name,
            locatorType: item.object_type,
            locator: item.object_value,
            isEditable: false
          }));
          console.log("SETROWS: ", objectRows[0]);
          setRows(objectRows);
        } catch (error) {
          console.error("Error fetching objects:", error)
        }
      };
      setObjectRowValues()
    }, [])

    const [rows, setRows] = useState([
      { id: 1, pageName: "", elementName: "", locator: "", locatorType:"", isEditable: true },
    ]);

    const handleAddRow = () => {
      const newRow = { id: Date.now(), pageName: "", elementName: "", locator: "", isEditable: true };
      const updatedRows = rows.map(row => ({ ...row, isEditable: false }));
      setRows([...updatedRows, newRow]);
    };

    const handleDeleteRow = (id) => {
      if (rows.length === 1) {
        // If only one row is left, do not delete it
        return;
      }

      const updatedRows = rows.filter(row => row.id !== id);
      setRows(updatedRows);
    };

    const handleEditRow = (id) => {
      const updatedRows = rows.map(row => {
        if (row.id === id) {
          return { ...row, isEditable: true };
        }
        return row;
      });
      setRows(updatedRows);
    };

    const handleInputChange = (id, column, value) => {
      const updatedRows = rows.map(row => {
        if (row.id === id) {
          return { ...row, [column]: value };
        }
        return row;
      });
      setRows(updatedRows);
    };

    const fetchObjects= async () => {
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
          //drop down list
          const posts = await axios.get(`${baseurl}/object/locator_types`, config);
          console.log(posts.data);
          setLocatorType(posts.data.data.locator_type);

          //object items
          const obj = await axios.get(`${baseurl}/objects/${PROJECT_ID}`, config);
          setObjectData(obj.data.data.objects.map(obj => ({
            ...obj,
            isEditable: false
          })))
          console.log("OBJECTS ARE: ",objectData[0].isEditable);
        } catch (err) {
          return err.message;
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };


    const createObject = async(pageName,elementName,locatorType,locator) => {
      try{

        let token = "";
        let response = "";
        try {
          response = await axios.post(`${baseurl}/login/`, {
            "username": "FalconAdminUser",
            "password": "Falcon@$%#Pass123"
          })
          console.log("create object", response.data);
          token = response.data.data.access;
        } catch (err) {
          return err.message;
        }

        client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const payload = [{
          //change these
          object_name: elementName,
          object_type: locatorType,
          object_value: locator,
          page_name: pageName,
          project: `${PROJECT_ID}`,
        }];
        console.log("Request Payload:", payload)

        client
          .post('', payload)
          .then((response)=>{
            setObject([response.data, ...object]);
          })

      }catch(error){
        console.error("Error creating data: ", error)
      }
    }

    const handleSave = async () => {
      const editedRows = rows.filter(row => row.isEditable); // Filter only the edited rows
      const promises = editedRows.map(row =>
        createObject(row.pageName, row.elementName, row.locatorType, row.locator)
      );
      await Promise.all(promises); // Wait for all the requests to complete
    };

    return(
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table className="table" style={{ backgroundColor: 'white', width: '88%', margin: '20px', borderRadius: '20px', justifyContent: 'center', boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)' }}>
          <thead>
            <tr>
              <th></th>
              <th>Actions</th>
              <th>Page Name</th>
              <th>Element Name</th>
              <th>Locator Type</th>
              <th>Locator</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <Button variant="black" onClick={()=>handleAddRow()}>
                    <img src={addRow} height={"15px"} width={"15px"} />
                  </Button>
                </td>
                <td>

                  <Button variant="black" size="sm" onClick={() => handleEditRow(row.id)}>
                    <img src={editicon} height={"15px"} width={"15px"} />
                  </Button>
                  <Button variant="black" size="sm" onClick={() => handleDeleteRow(row.id)}>
                    <img src={deleteicon} height={"15px"} width={"15px"} />
                  </Button>
                  
                </td>
                <td>
                  <input
                    type="text"
                    value={row.pageName}
                      onChange={(e) => {
                        handleInputChange(row.id, 'pageName', e.target.value);
                        handlePageName(e);
                      }}
                    style={{ backgroundColor: 'white', border: '1px solid black' }}
                    disabled={!row.isEditable}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.elementName}
                    onChange={(e) => {
                      handleInputChange(row.id, 'elementName', e.target.value);
                      handleObjectName(e);
                    }}
                    style={{ backgroundColor: 'white', border: '1px solid black' }}
                    disabled={!row.isEditable}
                  />
                </td>
                <td>
                  <select
                    value={row.locatorType}
                    onChange={(e) => {
                      handleInputChange(row.id, 'locatorType', e.target.value);
                      handleObjectType(e);
                    }}
                    style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', padding: '8px' }}
                    disabled={!row.isEditable}
                  >
                    {locatorType.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    value={row.locator}
                    onChange={(e) =>{
                      handleInputChange(row.id, 'locator', e.target.value);
                      handleObjectValue(e);
                    }}
                    style={{ backgroundColor: 'white', border: '1px solid black' }}
                    disabled={!row.isEditable}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
          <tr>
            <td colSpan="6" style={{ textAlign: 'right' }}>
              <Button variant="primary" onClick={handleSave}>
                Save
              </Button>
            </td>
          </tr>
        </tfoot>
        </table>
      </div>
    )
}

export default ObjectMapComponent;
