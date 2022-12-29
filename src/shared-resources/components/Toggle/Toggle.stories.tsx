import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Toggle from './Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  return (
    <div className='w-48'>
      <Toggle {...args} enabled={enabled} setEnabled={setEnabled} />
    </div>
  );
};

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
