import styles from "./Section1.module.css";
import GreenBtn from "../General/GreenBtn";
import GrayBtn from "../General/GrayBtn";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Section1() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionCenter}>
          <div>
            <h4>Great software requires great testing</h4>
            <h3>find profit zapping bugs before your customeers do!</h3>
            <p className={styles.sectionContent}>
              As you are scaling and building fast, it becomes super easy to
              outlook critical issues that may affect your bottom line. Appstest
              acts as a cover to ensure that you ship faster to the market while
              gauarnating product quality that your developer and internal QA
              may overlook
            </p>
          </div>
          <div className={styles.sectionBtns}>
            <div className={styles.btn}>
              <Link href="../../RequestAccess">
                <a>
                  <GreenBtn>
                    <div className={styles.btnElements}>
                      <Typography>Request Access</Typography>
                      <div className={styles.iconBtn}>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </div>
                    </div>
                  </GreenBtn>
                </a>
              </Link>
            </div>
            <div className={styles.btn}>
              <Link href="../../RequestQuote">
                <a>
                  <GrayBtn>
                    <div className={styles.btnElements}>
                      <Typography>Request Quote</Typography>
                      <div className={styles.iconBtn}>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </div>
                    </div>
                  </GrayBtn>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
