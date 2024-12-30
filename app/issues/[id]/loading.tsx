import { Box, Card, Flex } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {

  return (
    <Box>

      <Skeleton className='max-w-10'/>

      <Skeleton width='10rem'/>
     
      <Card className='prose mt-3'>
        <Skeleton count={2} className='w-10'/>
      </Card>
      
    </Box>
  )
}

export default loading
