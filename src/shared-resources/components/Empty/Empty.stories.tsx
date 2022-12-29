import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Empty from './Empty';

export default {
  title: 'Empty',
  component: Empty,
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Basic = Template.bind({});
