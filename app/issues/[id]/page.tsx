import BadgeComp from '@/app/components/BadgeComp'
import prisma from '@/prisma/client'
import { Box, Button, Card, Grid, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { MdEdit } from "react-icons/md";
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import { notFound } from 'next/navigation'

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
    <Grid columns={{ initial: "1", md: "2" }} gap="3">
      <Box>
        <IssueDetails issue={issue} />
      </Box>

      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  )
}

export default page
