import React, { useState} from 'react'
import { Button, Card, CardContent,
         CardMedia, CardActions, 
         Typography, DialogTitle, 
         DialogContent, DialogActions, DialogContentText
        } from '@mui/material'

const Cards = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Card sx={{maxWidth:300}}>
        <CardMedia component={'img'}
        height= '140'
        image='https://images.unsplash.com/photo-1684230415060-c59210cd5666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
                Web Design
            </Typography>
            <Typography variant='body2'>
            941 views  Oct 27, 2022  React Material UI
            React Material UI Tutorials
            Card Design With React Material UI
            Learn Material UI From the Scratch with best examples
            </Typography>
        </CardContent>
       
        <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary' onClick={() => setOpen(true)}>Delete</Button>
        </CardActions>
      </Card>

      <dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are You Sure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are yu sure to delete this product ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button>Delete</Button>
        </DialogActions>
      </dialog>
    </div>
  )
}

export default Cards
