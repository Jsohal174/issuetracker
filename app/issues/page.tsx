import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='ml-5'>
      <Button><Link href="/issues/new">Create new issue</Link></Button>
    </div>
  )
}

export default page
