import BadgeComp from '@/app/components/BadgeComp'
import prisma from '@/prisma/client'
import { Card, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'




const page = async ({ params }: { params: { id: string }}) => {

  const issue  = await prisma.issue.findUnique({
    where: {
      id:parseInt(params.id)
    }
  })

  return (
    <div>
      <Heading>{issue!.id}</Heading>

      <div className='flex items-center space-x-3 my-3'>
        <BadgeComp status={issue!.status}/>
        <Text>{issue!.createdAt.toDateString()}</Text>
      </div>
     
      <Card className='prose mt-3'>
        <ReactMarkdown>
          {issue!.description}
        </ReactMarkdown>
      </Card>
      
    </div>
  )
}

export default page