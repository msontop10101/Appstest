import React from "react";
import Image from "next/image";

import { LPsection3 } from "../../files/data";
import { Typography } from "@mui/material";

function Section4() {
  return (
    <>
      <div>
        {LPsection3.map((content, index) => {
          const { img, icon, head, text } = content;
          return (
            <div key={index}>
              <div>
                <div>
                  <Image src={icon} alt="no." />
                  <Typography>{head}</Typography>
                </div>
                <Typography>{text}</Typography>
                <Typography>Request Access</Typography>
              </div>
              <Image src={img} alt="image" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Section4;
