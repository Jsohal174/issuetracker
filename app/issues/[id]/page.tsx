import BadgeComp from '@/app/components/BadgeComp'
import prisma from '@/prisma/client'
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { MdEdit } from "react-icons/md";
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import { notFound } from 'next/navigation'
import DeleteIssueButton from './DeleteIssueButton'

interface Props {
  params: {
    id: string
  }
}

const page = async ({ params }: Props) => {
  const id = parseInt(params.id)

  if (isNaN(id)) {
    return notFound() // Ensure it's a valid number
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: id, // Now `id` is a number
    }
  })

  if (!issue) {
    return notFound() // If no issue is found, return 404
  }

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="3">
      <Box className='md:col-span-4'>
        <IssueDetails issue={issue} />
      </Box>

      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id}/>
        </Flex>
      </Box>
    </Grid>
  )
}

export default page
