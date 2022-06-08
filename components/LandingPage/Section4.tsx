import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./Section4.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import mobile from "../../Assets/Images/Section4/mobile.png";

import { LPsection3 } from "../../files/data";

function Section4() {
  useEffect(() => {
    const contents =
      document.getElementById("contents")?.children[1].children[0];
    contents?.classList.add(styles.styler);
    const show =
      document.getElementById("contents")?.children[0].children[0].children[1]
        .children[1];
    show?.classList.remove(styles.hide);
  }, []);

  return (
    <>
      <div id="contents">
        {LPsection3.map((content, index) => {
          const { img, icon, head, text } = content;
          return (
            <div key={index} className={styles.displayedContent}>
              <div className={styles.sectionContainer}>
                <div className={styles.sectionTextContent}>
                  <div className={styles.headerContent}>
                    <Image src={icon} alt="no." />
                    <h4>{head}</h4>
                  </div>
                  <p>{text}</p>
                  <div className={styles.content}>
                    <p>Request Access</p>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </div>
                <div className={styles.parentImage}>
                  <Image src={img} alt="image" />
                  <div className={`${styles.pImage} ${styles.hide}`}>
                    <Image src={mobile} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Section4;
