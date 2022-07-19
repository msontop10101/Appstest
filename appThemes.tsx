import { createTheme } from "@mui/material/styles";

export const appThemes = createTheme({
  palette: {
    primary: {
      main: "#00690B",
    },
    secondary: {
      main: "#03510a",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#F0F0F0",
          "& fieldset": {
            borderColor: "#F0F0F0",
          },
          "&.Mui-focused fieldset": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderColor: "primary",
          },
          "&:hover fieldset": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderColor: "primary",
          },
          "& input::placeholder": {
            fontSize: 14,
          },
        },
      },
    },
  },
});
