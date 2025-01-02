import BadgeComp from '@/app/components/BadgeComp'
import prisma from '@/prisma/client'
import { Box, Button, Card, Grid, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { MdEdit } from "react-icons/md";

interface Props {

  params: {
    id: string
  }
}

const page = async ({ params}: Props) => {

  const {id} = await params

  const issue  = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    }
  })

  return (
    <Grid columns={{initial:"1", md:"2"}} gap="3">

      <Box>
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
      </Box>

      <Box>
        <Button>
          <MdEdit/>
          Edit Issue
          <Link href={`/issues/${id}/edit`}></Link>
        </Button>
      </Box>
    </Grid>
  )
}

export default page
