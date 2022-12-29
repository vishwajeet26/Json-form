import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ColumnProps } from 'shared-resources/types/Table.type';
import records from './mock.data.json';
import Table from './Table';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const columnProps: ColumnProps[] = [
  {
    dataIndex: 'name',
    title: 'Name',
  },
  {
    dataIndex: 'title',
    title: 'Title',
  },
  {
    dataIndex: 'email',
    title: 'email',
  },
  {
    dataIndex: 'role',
    title: 'role',
  },
];

const Template: ComponentStory<typeof Table> = (args) => (
  <Table
    {...args}
    columns={columnProps}
    records={records.slice(0, 10)}
    rowKey='email'
  />
);

const PaginationTemplate: ComponentStory<typeof Table> = (args) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <Table
      {...args}
      columns={columnProps}
      records={records}
      rowKey='email'
      pagination={{
        total: records.length,
        pageLimit: 10,
        currentPage,
        setCurrentPage,
      }}
    />
  );
};

export const Basic = Template.bind({});

export const WithPagination = PaginationTemplate.bind({});
