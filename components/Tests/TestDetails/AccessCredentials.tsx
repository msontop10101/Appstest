import React from 'react'
import {Typography, Box} from "@mui/material"
import { credentials } from '../../../files/data'
import Link from "next/link"
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const AccessCredentials = () => {
    const header = {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "20px",
        marginBottom: "20px"
    }
    const credentialStyle = {
        display: "flex",
        margin: "10px 0px 10px 0px"
    }
    const fill = {
        marginLeft: "5px"
    }
    const fillLink = {
        marginLeft: "5px",
        color: "blue",
        textDecoration: "underline"
    }
    const warning = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ff000038",
        padding: "20px",
        borderRadius: "5px",
        marginTop: "20px",
    }
    const iconStyle = {
        marginRight: "5px",
        color: "red",
    }
  return (
    <>
        <Box>
        <Typography sx={header}>Access Credentials</Typography>
        </Box>
        <Box>
            {
                credentials.map((credential, index) => {
                    const {url, username, password, futher} = credential
                    return (
                        <Box key={index}>
                            <Box sx={credentialStyle}>
                                <Typography>URL: </Typography>
                                <Link href="#">
                                    <a>
                                    <Typography sx={fillLink}>{url}</Typography>
                                    </a>
                                </Link>
                            </Box>
                            <Box sx={credentialStyle}>
                                <Typography>Username: </Typography>
                                <Typography sx={fill}>{username}</Typography>
                            </Box>
                            <Box sx={credentialStyle}>
                                <Typography>Password: </Typography>
                                <Typography sx={fill}>{password}</Typography>
                            </Box>
                            <Box sx={credentialStyle}>
                                <Typography>Futher Instruction: </Typography>
                                <Typography sx={fill}>{futher}</Typography>
                            </Box>
                        </Box>
                    )
                })
            }
            <Box sx={warning}>
                <WarningAmberRoundedIcon sx={iconStyle}/>
                <Typography>Do not peform any order or booking</Typography>
            </Box>
        </Box>
    </>
  )
}

export default AccessCredentials