export interface BasicFieldTypes {
  name: string;
  label: string;
  type: string;
  isRequired?: boolean;
  placeholder?: string;
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
      children: [
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'text',
          isRequired: false,
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
    },
    {
      name: 'number',
      label: 'Mobile Number',
      type: 'number',
      isRequired: true,
      placeholder: 'Enter Your Mobile Number',
    },
  ],
};
