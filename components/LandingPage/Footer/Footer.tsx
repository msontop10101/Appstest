import { Box, Stack, Divider } from "@mui/material";

const Footer = () => {
  const footerSection = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: "10px 0px 40px 0px",
    backgroundColor: "#F7F7F7",
  };
  const footerLink = {
    listStyleType: "none",
    textDecoration: "underline",
    cursor: "pointer",
  };
  return (
    <>
      <Box sx={footerSection}>
        <Box>
          <p>&copy; Appstest 2022</p>
          <Box>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <li style={footerLink}>Terms & conditions</li>
              <li style={footerLink}>Privacy Policy</li>
              <li style={footerLink}>Sitmap</li>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
