import { BiLogOut } from 'react-icons/bi';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className='w-48'>
    <Button {...args} className='text-white'>
      <span>Hey</span>
    </Button>
  </div>
);

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  trailingIcon: <BiLogOut className='w-4 py-1 ml-2' />,
};

export const Submitting = Template.bind({});
Submitting.args = {
  trailingIcon: <BiLogOut className='w-4 py-1 ml-2' />,
  isSubmitting: true,
};
