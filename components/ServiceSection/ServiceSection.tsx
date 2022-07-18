import React from "react";
import styles from "./ServiceSection.module.css";
import { Services } from "../../files/data";
import Image from "next/image";
import check from "../../Assets/Images/ServiceSider/check.png";
import IconsList from "../IconsList/IconsList";

function ServiceSection() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionContents}>
          <div className={styles.contentWrapper}>
            <h2>Discover how we can help you</h2>
            <p>We&apos;ve tested over 100+ applications and we can help you:</p>
            <div>
              {Services.map((service, index) => {
                const { info } = service;
                return (
                  <div key={index}>
                    <div className={styles.checks}>
                      <div className={styles.img}>
                        <Image src={check} alt="check" />
                      </div>
                      <div>
                        <p>{info}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className={styles.lastChild}>
              Trusted by amazing development teams in the world
            </p>
            <IconsList />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
