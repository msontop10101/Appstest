import React from 'react'
import {Typography, Box} from "@mui/material"
import FeaturesAcc from './FeaturesAcc'

const Goat = () => {
    const head = {
        fontSize: "20px",
        fontWeight: "bold",
        margin: "10px 0px 10px 0px",
    }
    const subContainer ={
        margin: "40px 0px 40px 0px"
    }
  return (
    <>
        <Box sx={subContainer}>
            <Typography sx={head}>Goal of this test</Typography>
            <Typography>No Information</Typography>
        </Box>
        <Box sx={subContainer}>
            <Typography sx={head}>Out of scope</Typography>
            <Typography>File only high and critical bugs. Do not file low piority bugs</Typography>
        </Box>
        <Box sx={subContainer}>
            <Typography sx={head}>Additional requirement</Typography>
            <Typography>No Information</Typography>
        </Box>
        <Box sx={subContainer}>
            <Typography sx={head}>Test these features</Typography>
            <FeaturesAcc/>
        </Box>
    </>
  )
}

export default Goat