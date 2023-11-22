// DisplayDataPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayDataPage = () => {
  const location = useLocation();
  const formData = location.state.formData;

  return (
    <div>
      <h2>Display Data Page</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default DisplayDataPage;
