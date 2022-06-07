import styles from "./Section1.module.css";
import { Typography } from "@mui/material";
import GreenBtn from "../General/GreenBtn";
import GrayBtn from "../General/GrayBtn";

function Section1() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div>
          <h4>Great software requires greate testing</h4>
          <h3>find profit zapping bugs before your customeers do</h3>
          <Typography>
            As you are scaling and building fast, it becomes super easy to
            outlook critical issues that may affect your bottom line. Appstest
            acts as a cover to ensure that you ship faster to the market while
            gauarnating product quality that your developer and internal QA may
            overlook
          </Typography>
        </div>
        <div className={styles.sectionBtns}>
          <GreenBtn>
            <Typography>Request Access</Typography>
          </GreenBtn>
          <GrayBtn>
            <Typography>Request Quote</Typography>
          </GrayBtn>
        </div>
      </div>
    </>
  );
}

export default Section1;
