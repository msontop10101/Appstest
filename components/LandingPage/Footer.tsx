import styles from "./Footer.module.css";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div>
          <p>&copy; Appstest 2022</p>
          <div>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <li>Terms & conditions</li>
              <li>Privacy Policy</li>
              <li>Sitmap</li>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
