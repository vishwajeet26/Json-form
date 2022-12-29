import React from 'react';
import { FormikErrors, FormikTouched } from 'formik';

interface ErrorMessageProps {
  name: string;
  errors: FormikErrors<Record<string, string | boolean>>;
  touched: FormikTouched<Record<string, string | boolean>>;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  name,
  errors,
  touched,
}: ErrorMessageProps) => (
  <div>
    {errors[name] && touched[name] ? (
      <span className='text-red-500 text-sm'>{errors[name]}</span>
    ) : null}
  </div>
);

export default ErrorMessage;
