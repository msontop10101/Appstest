import React from 'react'
import {Box, Typography, Divider} from "@mui/material"
import GreenBtn from "../General/GreenBtn"
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  return (
    <>
      <Box>
        <Typography>Teams</Typography>
        <GreenBtn>
          <Box>
            <AddIcon/>
            <Typography>Add team</Typography>
          </Box>
        </GreenBtn>
      </Box>
      <Divider/>
    </>
  )
}

export default Header