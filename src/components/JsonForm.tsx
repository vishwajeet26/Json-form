import React from 'react';
import { Formik, Form } from 'formik';
import { FormType } from 'models/jsonFormModel';
import * as Yup from 'yup';
import CustomField from './CustomField';
import ErrorMessage from './ErrorMessage';

interface JsonFormProps {
  formData: FormType;
}
const JsonForm: React.FC<JsonFormProps> = (props) => {
  const { formData } = props;
  const initialValues = formData.fields.reduce(
    (acc: Record<string, string | boolean>, field) => {
      acc[field.name] = field.type === 'checkbox' ? false : '';
      if (field.children) {
        field.children.forEach((child) => {
          acc[child.name] = child.type === 'checkbox' ? false : '';
        });
      }
      return acc;
    },
    {}
  );

  const validationSchema = Yup.object().shape(
    formData.fields.reduce((acc: any, field) => {
      acc[field.name] = field.isRequired
        ? Yup.string().required(`${field.label} is required`)
        : Yup.string();
      if (field.children) {
        field.children.forEach((child) => {
          acc[child.name] = child.isRequired
            ? Yup.string().required(`${child.label} is required`)
            : Yup.string();
        });
      }
      return acc;
    }, {})
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, setValues }) => (
        <Form>
          {formData.formName ? (
            <h1 className='text-lg font-bold text-blue-700'>
              {formData.formName}
            </h1>
          ) : null}
          {formData.fields.map((field) => (
            <div key={field.name} className='flex'>
              <div>
                <CustomField data={field} />
                <ErrorMessage
                  name={field.name}
                  errors={errors}
                  touched={touched}
                />
              </div>
              {field.children
                ? field.children.map((child) => (
                    <div key={child.name} className='mx-2'>
                      <CustomField data={child} />
                      <ErrorMessage
                        name={child.name}
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                  ))
                : null}
            </div>
          ))}
          <div className='mt-4 space-x-2 w-full flex justify-center items-center'>
            <button
              className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
              onClick={() => setValues(initialValues)}
            >
              Cancel
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
              type='submit'
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default JsonForm;