import { useField } from 'formik';
import React from 'react';
import InputHelper from '../Inputhelper/InputHelper';
import Select, { SelectProps } from './Select';

export interface FormikSelectProps extends Omit<SelectProps, 'onChange'> {
  name: string;
}

const FormikSelectMenu: React.FC<FormikSelectProps> = (props) => {
  const { name } = props;
  const [, meta, helpers] = useField(name);

  const { value, error, touched } = meta;
  const { setValue } = helpers;

  return (
    <>
      <Select
        selected={value}
        onChange={(_value): void => setValue(_value)}
        {...props}
      />
      {touched && error && <InputHelper type='error' text={error} />}
    </>
  );
};

export default FormikSelectMenu;
