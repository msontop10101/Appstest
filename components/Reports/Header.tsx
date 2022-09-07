import React from 'react'
import {Box, Typography} from "@mui/material"
import GreenBtn from '../General/GreenBtn'

const Header = () => {
    const header = {
        display: "flex",
        justifyContent: "space-between"
    }
    const headText = {
        fontWeight: "bold",
        fontSize: "22px"
    }
  return (
    <>
        <Box sx={header}>
            <Typography sx={headText}>My first steps</Typography>
            <GreenBtn>Create test</GreenBtn>
        </Box>
        <Box>
            <Typography sx={headText}>
                Report
            </Typography>
        </Box>
    </>
  )
}

export default Header