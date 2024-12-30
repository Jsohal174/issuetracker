import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

interface Props {
  status:Status
}

const BadgeComp = ({status}: Props) => {

  if(status==='OPEN'){
    return (
      <Badge color="red">{status}</Badge>
    )
  }

  if(status==='CLOSED'){
    return (
      <Badge color="green">{status}</Badge>
    )
  }

  if(status==='IN_PROGRESS'){
    return (
      <Badge color="orange">{status}</Badge>
    )
  }
  
}

export default BadgeComp
