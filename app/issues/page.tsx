import prisma from '@/prisma/client'
import { Badge, Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import BadgeComp from '../components/BadgeComp'

const page = async () => {

  const issues = await prisma.issue.findMany()
  return (
    <div className='ml-5'>

      <div className='mb-5'>
        <Button><Link href="/issues/new">Create new issue</Link></Button>
      </div>
    
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}> {/* Add a unique key */}
              <Table.Cell>{issue.title}
                <div className='block md:hidden'>
                  <BadgeComp status={issue.status}></BadgeComp>
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><BadgeComp status={issue.status}></BadgeComp></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default page
