import React from 'react'
import { Container, Typography } from '@mui/material'

const Containers = () => {
  return (
    <>
      <Container sx={{background:'yellow'}} maxWidth='xs'>
        <Typography variant='body2'>
            This id XS
        </Typography>
      </Container>
      <br/>
      <Container sx={{background:'yellow'}} maxWidth='sm'>
        <Typography variant='body2'>
            This id Small
        </Typography>
      </Container>
      <br />
      <Container sx={{background:'yellow'}} maxWidth='md'>
        <Typography variant='body2'>
            This id Mediam
        </Typography>
      </Container>
      <br />
      <Container sx={{background:'yellow'}} maxWidth='lg'>
        <Typography variant='body2'>
            This id Large
        </Typography>
      </Container>
      <br />
      <Container sx={{background:'yellow'}} maxWidth='xl'>
        <Typography variant='body2'>
            This id Exralarge
        </Typography>
      </Container>
    </>
  )
}

export default Containers
