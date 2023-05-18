import React, { useState } from 'react'
import { Modal, Button, Box, Typography, Link } from '@mui/material'

const Modals = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position='absolute' top='50%' left='50%' >
          <Typography>This is a Modal</Typography>
          <Button variant='contained' onClick={() => setOpen(false)}>Cancel</Button>
        </Box>
      </Modal>

      <Link variant='h3' color='secondary' href='https://www.youtube.com/watch?v=ybxaPhVMwDo&list=PLuHGmgpyHfRwE3FmGFXXOFU_gQQI_PJC1&index=13&ab_channel=TechinfoYT'
      underline='hover'>
        Nav Link
      </Link>
      
    </div>
  )
}

export default Modals
