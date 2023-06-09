import React, { useState, useEffect } from 'react';
import '../css/testSteps.css';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import Modal from '../components/Modal';
import Panel from './Panel';
import ObjectRepository from '../components/ObjectRepository';
import axios from 'axios';

const CreateTestSteps = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedPageName, setSelectedPageName] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);


  useEffect(() => {
    // Fetch options from API
    fetchOptions()
      .then((data) => {
        setOptions(data.data.actions);
        setRows([
          { id: 1, action: 'default', disableTypeTextbox: false },
          { id: 2, action: 'default', disableTypeTextbox: false },
          { id: 3, action: 'default', disableTypeTextbox: false },
        ]);
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });
  }, []);

  const generatePlaceholder = (actionDescription) => {
    const matches = actionDescription.match(/\[(.*?)\]/g);
    return matches ? matches.map((match) => match.slice(1, -1)) : [];
  };
  const handlePanelSave = (pageName, element) => {
    if (selectedRowIndex !== null) { 
      const updatedRows = rows.map((row) => {
        if (row.id === selectedRowIndex) { 
          return {
            ...row,
            pageName: pageName,
            element: element,
          };
        }
        return row;
      });
      setRows(updatedRows);
    }
    setSelectedRowIndex(null); 
    setPanelOpen(false);
  };
  



  const fetchOptions = async () => {
    try {
      const authResponse = await axios.post('http://15.207.9.210:8000/login/', {
        username: 'FalconAdminUser',
        password: 'Falcon@$%#Pass123',
      });
      const token = authResponse.data.data.access;

      // Fetch options with authentication
      const response = await axios.get('http://15.207.9.210:8000/test/get_action_list', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedOptions = response.data.data.actions.map((option) => ({
        ...option,
        placeholder: generatePlaceholder(option.action_description),
      }));

      return {
        ...response.data,
        actions: updatedOptions,
      };
    } catch (error) {
      throw new Error('Error fetching options');
    }
  };


  const handleActionChange = (event, id, direction) => {
    if (direction === 'up') {
      if (id === 1) return;
  
      const updatedRows = rows.map((row) => {
        if (row.id === id - 1) {
          return { ...row, id: row.id + 1, shift: 'move-down' };
        } else if (row.id === id) {
          return { ...row, id: row.id - 1, shift: 'move-up' };
        }
        return row;
      });
      setRows(updatedRows);
      setTimeout(() => {
        const resetShiftRows = updatedRows.map((row) => ({ ...row, shift: '' }));
        setRows(resetShiftRows);
      }, 300);
    } else if (direction === 'down') {
      if (id === rows.length) return;
  
      const updatedRowsDown = rows.map((row) => {
        if (row.id === id) {
          return { ...row, id: row.id + 1, shift: 'move-down' };
        } else if (row.id === id + 1) {
          return { ...row, id: row.id - 1, shift: 'move-up' };
        }
        return row;
      });
      setRows(updatedRowsDown);
      setTimeout(() => {
        const resetShiftRows = updatedRowsDown.map((row) => ({ ...row, shift: '' }));
        setRows(resetShiftRows);
      }, 300);
    } else if (direction === 'delete') {
      const updatedRowsDelete = rows.filter((row) => row.id !== id);
      setRows(updatedRowsDelete);
    } else {
      const selectedValue = event.target.value;
      let disableTypeTextbox = false;
  
      if (selectedValue.includes('[ELEMENT]') && selectedValue.includes('[TEST DATA]')) {
        disableTypeTextbox = false;
      } else if (selectedValue.includes('[URL]') || selectedValue.includes('[TEXT]')) {
        disableTypeTextbox = false;
      }else if(selectedValue.includes('[ELEMENT]') || selectedValue.includes('[ALERT]')){
        disableTypeTextbox = true;
      }
  
      const updatedRowsOther = rows.map((row) =>
        row.id === id
          ? {
              ...row,
              action: selectedValue,
              disableTypeTextbox: disableTypeTextbox,
            }
          : row
      );
      setRows(updatedRowsOther);
    }
  };
  




  const openModal = (rowId) => {
    setSelectedRowIndex(rowId); 
    setSelectedPageName("");
    setSelectedElement("");
    setPanelOpen(true);
  };

  const closeModal = () => {
    setPanelOpen(false);
  };

  const addStep = () => {
    const newId = rows.length + 1;
    const newRow = { id: newId, action: 'default', disableTypeTextbox: false };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  return (
    <div className="container">
      <h1 className="h">Create Test Steps</h1>
      <div className="table-wrapper">
        <table className="my-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Action</th>
              <th>Select Elements</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className={row.shift}>
                <td>{row.id}</td>
                <td>
                  <select
                    className="select-width"
                    value={row.action}
                    onChange={(event) => handleActionChange(event, row.id)}
                  >
                    <option value="default">Select an Option</option>
                    {Array.isArray(options) &&
                      options.map((option) => (
                        <option key={option.id} value={option.action_description}>
                          {option.action_description}
                        </option>
                      ))}
                  </select>
                </td>
                <td className="modal-row">
                {row.pageName && row.element ? (
                <div>
                  {console.log(row.pageName + " and " + row.element)}
                  <span>{row.pageName}</span>, <span>{row.element}</span>
                </div>
              ) : (
                <button
                  className="triple-dot-btn"
                  type="button"
                  onClick={() => openModal(row.id)} 
                >
                  ...
                </button>
                  )}
                </td>
                <td>
                  {row.disableTypeTextbox ? (
                    <input type="text" placeholder="TestData" disabled={row.disableTypeTextbox} />
                  ) : (
                    <input type="text" />
                  )}
                </td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill onClick={() => handleActionChange(null, row.id, 'delete')} />
                    <ArrowUpward onClick={() => handleActionChange(null, row.id, 'up')} disabled={row.id === 1} />
                    <ArrowDownward onClick={() => handleActionChange(null, row.id, 'down')} disabled={row.id === rows.length} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="custom-buttons">
        <div className="custom-can-btn">
          <button type="button" onClick={addStep}>
            Add Step
          </button>
        </div>
        <div className="custom-can-btn">
          <button type="button">Save</button>
        </div>
      </div>
      {panelOpen && (
        <Modal closeModal={closeModal}>
          <Panel show={panelOpen}  closeModal={closeModal} handlePanelSave={handlePanelSave} />

        </Modal>
      )}
    </div>
  );
};

export default CreateTestSteps;