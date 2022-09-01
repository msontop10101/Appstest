import React from 'react'
import {IconButton, Box, Typography} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const Steps = () => {
    const iconStyle = {
        backgroundColor: "green",
        color: "white",
    }
  return (
    <>
        <Box>
            <IconButton sx={iconStyle}>
                <AddIcon/>
            </IconButton>
            
        </Box>
    </>
  )
}

export default Steps