import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateTestCases from '../components/CreateTestCases';
import CreateTestSteps from '../components/CreateTestSteps';

const Routes = () => {
  return (
    
    <Routes>
        <Route path="/" element={<CreateTestCases />} />
        <Route path="/createteststeps" element={<CreateTestSteps />} />
      </Routes>
    
  );
};

export default Routes;
