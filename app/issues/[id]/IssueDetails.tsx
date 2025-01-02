import BadgeComp from '@/app/components/BadgeComp'
import { Issue } from '@prisma/client'
import { Heading, Card, Text } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue}: {issue: Issue}) => {
  return (

    <>
    <Heading>{issue!.id}</Heading>

        <div className='flex items-center space-x-3 my-3'>
          <BadgeComp status={issue!.status}/>
          <Text>{issue!.createdAt.toDateString()}</Text>
        </div>
      
        <Card className='prose max-w-full mt-3'>
          <ReactMarkdown>
            {issue!.description}
          </ReactMarkdown>
        </Card>
    </>
  )
}

export default IssueDetails
