/* eslint-disable import/no-cycle */
import { FormikInputProps } from 'shared-resources/components/Input/FormikInput';
import { FormikSelectProps } from 'shared-resources/components/Select/FormikSelect';
import { SchemaOf } from 'yup';
import * as Yup from 'yup';
import 'yup-phone';

export type FieldType = 'text' | 'number' | 'select' | 'password';

export type FormField<
  T extends number | string = string,
  P extends FormikInputProps | FormikSelectProps = FormikSelectProps
> = {
  name: string;
  initialValue?: T;
  type: FieldType;
  validation?: SchemaOf<T>;
  componentProps: P;
};

export const mockData: FormField<
  string,
  FormikInputProps | FormikSelectProps
>[] = [
  {
    name: 'fullName',
    type: 'text',
    initialValue: '',
    validation: Yup.string().required('Full Name is required'),
    componentProps: {
      placeholder: 'Full Name',
      name: 'fullName',
      label: 'Full Name',
    },
  },
  {
    name: 'lastName',
    type: 'text',
    initialValue: '',
    validation: Yup.string().required('Last Name is required'),
    componentProps: {
      placeholder: 'Last Name',
      name: 'lastName',
      label: 'Last Name',
    },
  },
  {
    name: 'email',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    componentProps: {
      placeholder: 'Enter your email',
      name: 'email',
      label: 'Email',
    },
  },
  {
    name: 'phoneNumber',
    type: 'number',
    validation: Yup.string()
      .phone('IN', true, 'Enter a correct mobile number')
      .required('Mobile number is required'),
    componentProps: {
      placeholder: 'Enter Phone Number',
      name: 'phoneNumber',
      label: 'Phone Number',
    },
  },
  {
    name: 'age',
    type: 'select',
    validation: Yup.string().required('Please select your age'),
    componentProps: {
      items: [
        { label: '<8', value: '8' },
        { label: '<15', value: '15' },
        { label: '<18', value: '18' },
        { label: '<80', value: '80' },
      ],
      name: 'age',
    },
  },
];
