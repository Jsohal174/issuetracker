import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { MdEdit } from 'react-icons/md'


const EditIssueButton = ({issueId}: {issueId: number}) => {
  return (
    <Button>
        <MdEdit/>
        Edit Issue
        <Link href={`/issues/${issueId}/edit`}></Link>
    </Button>
  )
}

export default EditIssueButton
