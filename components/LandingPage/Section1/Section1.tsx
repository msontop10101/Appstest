


import GreenBtn from "../../General/GreenBtn";
import GrayBtn from "../../General/GrayBtn";
import { Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Section1 = () => {
  const sectionContainer = {
    marginTop: "70px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
  const sectionCenter = {
    display: "flex",
    flexDirection: "column",
    width: {
        sm: "60%",
        xs: "100%"
    },
    textAlign: "center",
    alignItems: "center",
  };
  const head1 = {
    color: "#00690B",
    textTransform: "uppercase",
    fontWeight: "normal",
    fontSize: {
        sm: "large",
        xs: "smaller"
    },
  }
  const head2 ={ 
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: {
        sm: "xx-large",
        xs: "large",
    }, 
  }
  const sectionContent = {
    fontSize: {
        sm: "16px",
        xs: "smaller",
    },
    color: "rgb(56, 56, 56)"
  }
  const sectionBtns = {
    display: {
        sm: "flex",
        xs: "block"
    },
    marginTop: "10px",
  }
  const btns = {
    padding: {
        sm: "15px",
        xs: "5px",
    }
  }
  const btnElements = {
    display: "flex",
    alignItems: "center",
  }
  const iconBtn = {
    paddingLeft: "5px"
  }
  const btnElementsText = {
    padding: "0px",
    margin: "0%",
  }
  const linkStyle = {
    textDecoration:"none",
  }
  return (
    <> 
      <Box sx={sectionContainer}>
        <Box sx={sectionCenter}>
          <Box>
            <Typography sx={head1}>Great software requires great testing</Typography>
            <Typography sx={head2}>find profit zapping bugs before your customeers do!</Typography>
            <Typography sx={sectionContent}>
              As you are scaling and building fast, it becomes super easy to
              outlook critical issues that may affect your bottom line. Appstest
              acts as a cover to ensure that you ship faster to the market while
              gauarnating product quality that your developer and internal QA
              may overlook
            </Typography>
          </Box>
          <Box sx={sectionBtns}>
            <Box sx={btns}>
              <Link href="../../RequestAccess">
                <a style={linkStyle}>
                  <GreenBtn>
                    <Box sx={btnElements}>
                      <Typography>Request Access</Typography>
                      <Box sx={iconBtn}>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </Box>
                    </Box>
                  </GreenBtn>
                </a>
              </Link>
            </Box>
            <Box sx={btns}>
              <Link href="../../RequestQuote">
                <a style={linkStyle}>
                  <GrayBtn>
                    <Box sx={btnElements}>
                      <Typography>Request Quote</Typography>
                      <Box sx={iconBtn}>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </Box>
                    </Box>
                  </GrayBtn>
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Section1;

