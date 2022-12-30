/* eslint-disable import/no-named-as-default */
import React from 'react';
// constants
import { mockData } from 'models/jsonFormModel';
// components
import JsonForm from 'components/JsonForm';

const App: React.FC = () => (
  <div className='flex justify-center items-center h-full'>
    <JsonForm formData={mockData} />
  </div>
);

export default App;
