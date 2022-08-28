import * as React from 'react';
import {Box, Tabs, Tab, Typography, Divider} from "@mui/material"

const Header = (props: any) => {
  const [value, setValue] = React.useState('overview');
  props.getPage(value)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const header = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  }
  const tabStyle = {
    fontWeight: "bold",
    textTransform: "capitalize"
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Typography sx={header}>Providus Bank</Typography>
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        
      >
        <Tab sx={tabStyle} value="overview" label="Overview" />
        <Tab sx={tabStyle} value="bugList" label="Bug List" />
        <Tab sx={tabStyle} value="communication" label="Communication" />
      </Tabs>
      <Divider/>
    </Box>
  );
}

export default Header;