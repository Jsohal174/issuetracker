import prisma from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import BadgeComp from '../../components/BadgeComp'
import NewLink from '../../components/Link'
import IssueButton from './IssueButton'

const page = async () => {

  const issues = await prisma.issue.findMany()

  return (
    <div className='ml-5'>

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
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <NewLink href={`/issues/${issue.id}`}>{issue.title}</NewLink>
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

export const dynamic = 'force-dynamic'
export default page
