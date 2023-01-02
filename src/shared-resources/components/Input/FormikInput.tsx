import { useField } from 'formik';
import React from 'react';
import { InputProps } from 'shared-resources/types/Input.type';
import Input from './Input';

export interface FormikInputProps
  extends Omit<InputProps, 'onChange' | 'value'> {
  name: string;
}

const FormikInput: React.FC<FormikInputProps> = (props) => {
  const { name } = props;
  const [, meta, helpers] = useField(name);

  const { value, error, touched } = meta;
  const { setValue } = helpers;

  return (
    <Input
      value={value}
      onChange={(e): void => setValue(e.target.value)}
      error={error}
      touched={touched}
      {...props}
    />
  );
};

export default React.memo(FormikInput);
