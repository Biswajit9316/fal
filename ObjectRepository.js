import React from 'react';
import '../css/objectRepository.css';

const ObjectRepository = () => {
  return (
    <div className="object-repository-table">
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Page Name</th>
            <th>Element</th>
            <th>Locator</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="radio" />
            </td>
            <td><input type = "text"/>
            
            </td>
            <td><input type = "text"/></td>
            <td><input type = "text"/></td>
          </tr>
          <tr>
            <td>
              <input type="radio" />
            </td>
            <td>Login</td>
            <td><input type = "text"/></td>
            <td><input type = "text"/></td>
          </tr>
          <tr>
            <td>
              <input type="radio" />
            </td>
            <td>Login</td>
            <td><input type = "text"/></td>
            <td><input type = "text"/></td>
          </tr>
          {/* ... Add more table rows as needed ... */}
        </tbody>
      </table>
      <div className="select-button">
                <div className="custom-can-btn">
                    <button>Select</button>
                </div>
        </div>
    </div>
  );
};

export default ObjectRepository;
