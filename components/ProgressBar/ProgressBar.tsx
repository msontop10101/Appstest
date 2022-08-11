import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      {/* <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box> */}
    </Box>
  );
}

const ProgressBar = () => {
  const progressBarStyle = {
    height: "10px",
    borderRadius: "5px",
  };
  const progressLabelStyle = {
    marginTop: "10px",
    fontSize: "14px",
  };
  const [progress, setProgress] = React.useState(25);

  return (
    <Box sx={{ width: "40%" }}>
      <LinearProgressWithLabel sx={progressBarStyle} value={progress} />
      <Typography sx={progressLabelStyle} color="text.secondary">
        1 of 4 complete
      </Typography>
    </Box>
  );
};

export default ProgressBar;
