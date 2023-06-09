import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Panel.css";

const Panel = (props) => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([
    { selectValue: "", pageName: "Page 1", element: "Element 1", locator: "Locator 1" },
    { selectValue: "", pageName: "Page 2", element: "Element 2", locator: "Locator 2" },
    { selectValue: "", pageName: "Page 3", element: "Element 3", locator: "Locator 3" },
    // ... other data rows
  ]);
  const [selectedPageName, setSelectedPageName] = useState("");
  const [selectedElement, setSelectedElement] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filteredRows = data.filter((row) =>
      row.pageName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filteredRows);
  };

  const [filteredData, setFilteredData] = useState(data);

  const handleRadioChange = (event, index) => {
    const updatedData = [...filteredData];
    if (updatedData[index].selectValue === event.target.value) {
      updatedData[index].selectValue = "";
      setSelectedPageName("");
      setSelectedElement("");
    } else {
      updatedData[index].selectValue = event.target.value;
      setSelectedPageName(updatedData[index].pageName);
      setSelectedElement(updatedData[index].element);
    }
    setFilteredData(updatedData);
  };

  const handleInputChange = (event, index, field) => {
    const updatedData = [...filteredData];
    updatedData[index][field] = event.target.value;
    setFilteredData(updatedData);
  };

  const handleSave = () => {
    if (selectedPageName && selectedElement) {
      console.log("Page Name:", selectedPageName);
      console.log("Element:", selectedElement);
      props.handlePanelSave(selectedPageName, selectedElement);
    }
  };

  return (
    <Modal show={props.show} onHide={props.closeModal} dialogClassName="custom-modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title className="modal-title">Select Element</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered className="modal-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Page Name</th>
              <th>Element</th>
              <th>Locator</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="radio"
                    name={`radio-${index}`}
                    value={row.pageName}
                    checked={row.selectValue === row.pageName}
                    onChange={(e) => handleRadioChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.pageName}
                    onChange={(e) => handleInputChange(e, index, "pageName")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.element}
                    onChange={(e) => handleInputChange(e, index, "element")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.locator}
                    onChange={(e) => handleInputChange(e, index, "locator")}
                    className="form-control"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-save" onClick={handleSave}>Save</button>
        <button className="btn btn-cancel" onClick={props.closeModal}>Cancel</button>
      </Modal.Footer>
    </Modal>
  );
};

export default Panel;
