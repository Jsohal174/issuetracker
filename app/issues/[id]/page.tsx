import BadgeComp from '@/app/components/BadgeComp'
import prisma from '@/prisma/client'
import { Box, Button, Card, Grid, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { MdEdit } from "react-icons/md";
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'

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
        <IssueDetails issue={issue!}/>
      </Box>

      <Box>
        <EditIssueButton issueId={parseInt(id)}/>
      </Box>
    </Grid>
  )
}

export default page
