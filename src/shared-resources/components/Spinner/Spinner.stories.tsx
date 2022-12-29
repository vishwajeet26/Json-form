import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TopRoundedSpinner from './Spinner';

export default {
  title: 'Spinner',
  component: TopRoundedSpinner,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['xs', 'sm', 'md', 'lg', 'xl'],
        required: true,
      },
    },
    border: {
      control: {
        type: null,
      },
      type: {
        name: 'string',
        required: false,
      },
      table: {
        defaultValue: {
          summary: 'border-red-300',
        },
      },
    },
    customClassName: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof TopRoundedSpinner>;

const Template: ComponentStory<typeof TopRoundedSpinner> = (args) => (
  <TopRoundedSpinner {...args} />
);

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};
