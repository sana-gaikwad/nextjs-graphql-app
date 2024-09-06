// Note: Created a custom component as ChakraUi Pagination component is available in paid version only.

import React from "react";
import { Button } from "../button/Button";
import { PaginationProps } from "./Pagination.types";
import { Flex } from "@chakra-ui/react";

const PAGES_TO_DISPLAY = 5;

export const Pagination = ({
  totalPages,
  currentPage,
  onClick,
}: PaginationProps) => {
  
  /**
   * Calculates the range of pages to be displayed in the pagination component.
   *
   * @return {number[]} An array of page numbers to be displayed.
   */
  const getDisplayedPages = () => {
    let startPage;
    let endPage;

    if (totalPages <= PAGES_TO_DISPLAY) {
      startPage = 1;
      endPage = totalPages;
    } else {
      startPage = Math.max(1, currentPage - Math.floor(PAGES_TO_DISPLAY / 2));
      endPage = Math.min(totalPages, startPage + PAGES_TO_DISPLAY - 1);

      if (currentPage > totalPages - Math.ceil(PAGES_TO_DISPLAY / 2)) {
        startPage = Math.max(1, totalPages - PAGES_TO_DISPLAY + 1);
        endPage = totalPages;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  const displayedPages = getDisplayedPages();

  const isFirstGroup = displayedPages[0] === 1;
  const isLastGroup = displayedPages[displayedPages.length - 1] === totalPages;

  return (
    <Flex
      className="pagination"
      justifyContent={"center"}
      width={"100%"}
      flexWrap={"wrap"}
    >
      {!isFirstGroup && (
        <>
          <Button key="first-page" onClick={() => onClick(1)} m={2}>
            1
          </Button>
          <Button
            key="prev-group"
            onClick={() => onClick(displayedPages[0] - 1)}
            m={2}
          >
            ...
          </Button>
        </>
      )}

      {displayedPages.map((pageNumber) => (
        <Button
          isActive={pageNumber === currentPage}
          key={pageNumber}
          onClick={() => onClick(pageNumber)}
          m={2}
        >
          {pageNumber}
        </Button>
      ))}

      {!isLastGroup && (
        <>
          <Button
            key="next-group"
            onClick={() =>
              onClick(displayedPages[displayedPages.length - 1] + 1)
            }
            m={2}
          >
            ...
          </Button>
          <Button key="last-page" onClick={() => onClick(totalPages)} m={2}>
            {totalPages}
          </Button>
        </>
      )}
    </Flex>
  );
};
