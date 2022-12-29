import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div className='w-48'>
    <Checkbox {...args} />
  </div>
);

export const Basic = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  text: <span className='text-sm text-gray-500'>Checkbox</span>,
};

export const WithError = Template.bind({});
WithError.args = {
  text: <span className='text-sm text-red-600'>Checkbox</span>,
  error: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: <span className='text-sm text-gray-600'>Checkbox</span>,
  disabled: true,
};
