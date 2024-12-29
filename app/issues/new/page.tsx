'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-96 space-y-3'>
      <TextField.Root placeholder='Title' radius='medium'>
      </TextField.Root>
      <TextArea placeholder='Description' radius='full'></TextArea>

      <Button>Submit new issue</Button>
    </div>

  )
}

export default page
