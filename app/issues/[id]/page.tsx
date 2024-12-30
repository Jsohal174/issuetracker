import prisma from '@/prisma/client'
import React from 'react'



const page = async ({ params }: { params: { id: string }}) => {

  const issue  = await prisma.issue.findUnique({
    where: {
      id:parseInt(params.id)
    }
  })

  return (
    <div>
      <p>{issue!.id}</p>
      <p>{issue!.description}</p>
      <p>{issue!.status}</p>
      <p>{issue!.createdAt.toDateString()}</p>
      <p>{issue!.updatedAt.toDateString()}</p>

    </div>
  )
}

export default page
