import * as Yup from 'yup';

export interface BasicFieldTypes {
  name: string;
  label: string;
  type:
    | 'number'
    | 'time'
    | 'text'
    | 'email'
    | 'password'
    | 'date'
    | 'file'
    | undefined;
  isRequired?: boolean;
  placeholder?: string;
  validation?: Yup.SchemaOf<any>;
}

interface FieldTypes extends BasicFieldTypes {
  children?: BasicFieldTypes[];
}

export interface FormType {
  formName?: string;
  fields: FieldTypes[];
}

export const mockData: FormType = {
  formName: 'Sign up Form',
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      isRequired: true,
      placeholder: 'First Name',
      validation: Yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters long'),
      children: [
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'text',
          placeholder: 'Last Name',
        },
      ],
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      isRequired: true,
      placeholder: 'Email',
      validation: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    },
    {
      name: 'number',
      label: 'Mobile Number',
      type: 'number',
      isRequired: true,
      placeholder: 'Enter Your Mobile Number',
      validation: Yup.number().required('Mobile number is required'),
    },
  ],
};
