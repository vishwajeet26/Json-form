import React from 'react';
import { Formik, Form } from 'formik';
import { FormField } from 'models/jsonFormModel';
import * as Yup from 'yup';
import FormikInput, {
  FormikInputProps,
} from 'shared-resources/components/Input/FormikInput';
import FormikSelectMenu, {
  FormikSelectProps,
} from 'shared-resources/components/Select/FormikSelect';

interface JsonFormProps {
  formData: FormField<string | number, FormikSelectProps | FormikInputProps>[];
}
const JsonForm: React.FC<JsonFormProps> = (props) => {
  const { formData } = props;
  const initialValues = formData.reduce(
    (acc: Record<string, string | boolean>, field) => {
      acc[field.name] = '';
      return acc;
    },
    {}
  );

  const validationSchema = Yup.object().shape(
    formData.reduce((acc: any, field) => {
      if (field.validation) {
        acc[field.name] = field.validation;
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
      {({ resetForm }) => (
        <Form>
          {formData.map((field) => (
            <div key={field.name} className='flex'>
              <div className='mt-5 w-full'>
                {field.type === 'select' ? (
                  <FormikSelectMenu
                    {...(field.componentProps as FormikSelectProps)}
                    name={field.name}
                  />
                ) : (
                  <FormikInput {...field.componentProps} name={field.name} />
                )}
              </div>
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
