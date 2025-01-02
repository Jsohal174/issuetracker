import { Table } from '@radix-ui/themes'
import React from 'react'
import BadgeComp from '../../components/BadgeComp'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IssueButton from './IssueButton'

const values = [1,2,3,4,5]


const loading = () => {
  return (
    <div>

      <IssueButton/>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {values.map((value) => (
            <Table.Row key={value}>
              <Table.Cell><Skeleton/></Table.Cell>
              <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
              <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default loading
