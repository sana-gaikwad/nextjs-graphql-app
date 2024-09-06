export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onClick: (pageNumber: number) => void;
}
