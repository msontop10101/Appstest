import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function CustomizedTextField() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: "green" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="All"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 30, borderBottomWidth: "43px" }} style={{background: "white"}} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <ExpandMoreIcon style ={{color: "white"}}/>
      </IconButton>
    </Paper>
  );
}