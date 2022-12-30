import React from 'react';
import { Formik, Form } from 'formik';
import { FormType } from 'models/jsonFormModel';
import * as Yup from 'yup';
import FormikInput from 'shared-resources/components/Input/FormikInput';

interface JsonFormProps {
  formData: FormType;
}
const JsonForm: React.FC<JsonFormProps> = (props) => {
  const { formData } = props;
  const initialValues = formData.fields.reduce(
    (acc: Record<string, string | boolean>, field) => {
      acc[field.name] = '';
      if (field.children) {
        field.children.forEach((child) => {
          acc[child.name] = '';
        });
      }
      return acc;
    },
    {}
  );

  const validationSchema = Yup.object().shape(
    formData.fields.reduce((acc: any, field) => {
      if (field.isRequired && field.validation) {
        acc[field.name] = field.validation;
      }

      if (field.children) {
        field.children.forEach((child) => {
          if (field.isRequired && field.validation) {
            acc[child.name] = field.validation;
          }
        });
      }
      return acc;
    }, {})
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched, resetForm }) => (
        <Form>
          {formData.formName ? (
            <h1 className='text-lg font-bold text-blue-700'>
              {formData.formName}
            </h1>
          ) : null}
          {formData.fields.map((field) => (
            <div key={field.name} className='flex'>
              <div className='mt-5 w-full'>
                <FormikInput
                  name={field.name}
                  error={errors[field.name]}
                  label={field.label}
                  placeholder={field.placeholder}
                  type={field.type}
                  touched={touched[field.name]}
                />
              </div>
              {field.children
                ? field.children.map((child) => (
                    <div key={child.name} className='mx-2 mt-5'>
                      <FormikInput
                        name={child.name}
                        error={errors[child.name]}
                        label={child.label}
                        placeholder={child.placeholder}
                        type={child.type}
                        touched={touched[child.name]}
                      />
                    </div>
                  ))
                : null}
            </div>
          ))}
          <div className='mt-4 space-x-2 w-full flex justify-center items-center'>
            <button
              className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
              onClick={() => resetForm()}
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
