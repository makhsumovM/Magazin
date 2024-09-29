import { Button } from '@mui/material'
import React from 'react'

const Other = () => {
  return (
    <div className='p-[20px]'>
      <h1>
        <span>
          <Button variant='outlined'>Categories</Button>
          <Button variant='outlined'>Brands</Button>
        </span>
        <span><Button>ADD NEW</Button></span>
      </h1>
    </div>
  )
}

export default Other