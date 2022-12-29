import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TabItemProps } from 'shared-resources/types/Tabs.type';
import Tabs from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const mockData: TabItemProps[] = [
  {
    id: 'tab_1',
    title: 'Tab 1',
    component: <span>Tab 1 Data</span>,
  },
  {
    id: 'tab_2',
    title: 'Tab 2',
    component: <span>Tab 2 Data</span>,
    disabled: true,
  },
  {
    id: 'tab_3',
    title: 'Tab 3',
    component: <span>Tab 3 Data</span>,
  },
];

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} items={mockData} />
);

export const Basic = Template.bind({});
