import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import whiteHeader from "../../Assets/Images/Header/whiteHeader.png";
import styles from "./MFormHeader.module.css";

function MFormHeader() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.backIconBtn}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </a>
          </Link>
        </div>
        <div className={styles.headerImage}>
          <Image src={whiteHeader} alt="image" />
        </div>
      </div>
    </>
  );
}

export default MFormHeader;
