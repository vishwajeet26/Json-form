import React from 'react';
import { Field } from 'formik';
import { BasicFieldTypes } from 'models/jsonFormModel';

interface CustomFieldProps {
  data: BasicFieldTypes;
}
const CustomField: React.FC<CustomFieldProps> = ({ data }) => (
  <Field
    key={data.name}
    name={data.name}
    type={data.type}
    label={data.label}
    placeholder={data.placeholder}
    className='block mt-5 h-10 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
  />
);

export default CustomField;
