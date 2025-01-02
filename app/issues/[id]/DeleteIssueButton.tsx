import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { MdEdit } from 'react-icons/md'


const DeleteIssueButton = ({issueId}: {issueId: number}) => {
  return (
    <Button color='red'>
      <MdEdit/>
      <Link href={`/issues/${issueId}/delete`}>
        Delete Issue
      </Link>   
    </Button>
  )
}

export default DeleteIssueButton
