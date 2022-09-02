import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SideInfo from "./SideInfo";

const BugOverviewComp = () => {
  return (
    <>
      <Box>
        <Typography>Bug Overview</Typography>
        <Box>
          <Typography>Attachment</Typography>
          <Box>
            <SmartDisplayIcon />
          </Box>
        </Box>
        <Box>
          <Typography>Steps</Typography>
          <Box>
            <Box>
              <Avatar>1</Avatar>
              <Typography>
                Go to ajkdjfkld jf s dflksjfk dsjf;l ksld flk jsfkldsjf
              </Typography>
            </Box>
            <Box>
              <Avatar>2</Avatar>
              <Typography>
                Go to ajkdjfkld jf s dflksjfk dsjf;l ksld flk jsfkldsjf
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
            <Typography>Expected Result</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed possimus iusto, dicta, odio esse corporis animi rem, consectetur velit expedita quam necessitatibus quas facere cum in? Quae, obcaecati est.</Typography>
        </Box>
        <Box>
            <Typography>Actual Result</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed possimus iusto, dicta, odio esse corporis animi rem, consectetur velit expedita quam necessitatibus quas facere cum in? Quae, obcaecati est.</Typography>
        </Box>
        <Box>
            <Typography>Attachments</Typography>
            <Box>
                <PlayCircleOutlineIcon/>
                <Typography>jdfkljdkjfkldsjflkjdslkfjldkjsflkjslkfjdkljfkjdsflk;sj</Typography>
            </Box>
        </Box>
        <Box>
            <Typography>Additonal Comment</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod expedita quas mollitia magnam porro quisquam. Rerum voluptates</Typography>
        </Box>
        <Box>
            <Typography>Date</Typography>
        </Box>
        <Typography>Test World</Typography>
      </Box>
      <Box>
        <SideInfo/>
      </Box>
    </>
  );
};

export default BugOverviewComp;
