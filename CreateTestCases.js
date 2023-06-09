import '../css/testCases.css';
import logo from '../assets/images/falcon-logo-1.png';
import { Link, useNavigate } from 'react-router-dom';

const CreateTestCases = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/CreateTestSteps');
  };

  return (
    <div className="custom-container">
          <div className="custom-content-container">
        <div className="custom-page-header">
          <div className="custom-content">Create Test Case</div>
          {/* <div className="custom-content">How to Create Test Case?</div> */}
        </div>

        <div className="custom-form-field">
          <div className="custom-name">
            <label htmlFor="Name" className="custom-label">
              Name
            </label>
            <input type="text" placeholder="Name*" required />
          </div>
          <div className="custom-description">
            <label htmlFor="description" className="custom-label">
              Description
            </label>
            <textarea className="txtarea" placeholder="Description" required />
          </div>
          <div className="custom-url">
            <label htmlFor="url" className="custom-label">
              Test Case Type
            </label>
            <select type="text" className="select-options">
              <option value="Sanity">Sanity</option>
              <option value="Regression">Regression</option>
              <option value="Functional">Functional</option>
              <option value="Uat">UAT</option>
            </select>
          </div>
        </div>

        {/* <p><span>Hello</span></p> */}
      </div>

      <div className="custom-buttons">
        <div className="custom-can-btn">
          <button type="button">Cancel</button>
        </div>
        <div className="custom-can-btn">
        <button type="button" onClick={handleButtonClick}><Link to={`/CreateTestSteps`}></Link>Save </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTestCases;
