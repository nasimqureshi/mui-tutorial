import React from 'react'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

const ListComponent = () => {
  return (
    <div>
      <List sx={{width:250, background:'gray'}}>
      <ListItem>
        <ListItemButton>{">"}</ListItemButton>
        <ListItemText primary='nasimtechnology' />
      </ListItem>
      </List>
    </div>
  )
}

export default ListComponent
