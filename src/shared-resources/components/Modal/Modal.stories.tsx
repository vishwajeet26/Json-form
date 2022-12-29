import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    content: {
      control: {
        type: null,
      },
    },
    closeOnOutsideClick: {
      control: {
        type: null,
      },
    },
    title: {
      control: {
        type: null,
      },
    },
    visible: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [visible, setVisibility] = useState<boolean>(false);

  return (
    <>
      <div className='flex items-center justify-center'>
        <button
          type='button'
          onClick={() => setVisibility(true)}
          className='px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          Open dialog
        </button>
      </div>
      {visible && (
        <Modal
          {...args}
          title='Test'
          visible={visible}
          handleVisibility={(value) => setVisibility(value)}
        >
          <span>Hey</span>
        </Modal>
      )}
    </>
  );
};

export const Basic = Template.bind({});

export const WithAutoClose = Template.bind({});

WithAutoClose.args = {
  closeOnOutsideClick: true,
};
