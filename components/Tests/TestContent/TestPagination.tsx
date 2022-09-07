import React from "react";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Typography, Box } from "@mui/material";

interface paginationProps {
  testsPerPage: number;
  totalTestsOnPage: number;
  paginate: any;
  page: number;
}

const TestPagination = ({
  testsPerPage,
  totalTestsOnPage,
  paginate,
  page,
}: paginationProps) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTestsOnPage / testsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="paginationContainer">
        <Box>
          <Typography sx={{fontSize: "14px", paddingTop: "5px"}}>
            Showing {page} to {testsPerPage} of {totalTestsOnPage} entries
          </Typography>
        </Box>
        <ul>
          <li>Previous</li>
          <li>
            <ArrowLeftIcon />
          </li>
          {pageNumbers.map((num, index) => {
            return (
              <li key={index}>
                <Link href="#">
                  <a onClick={() => paginate(num)}>{num}</a>
                </Link>
              </li>
            );
          })}
          <li>
            <ArrowRightIcon />
          </li>
          <li>Next</li>
        </ul>
      </div>
    </>
  );
};

export default TestPagination;
