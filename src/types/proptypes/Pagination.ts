export type Pagination = {
  totalCount: number,
  pageSize: number,
  currentPage: number;
  siblingCount?: number,
}

export type PaginationProps = {
  onPageChange(page: number): void
} & Pagination;
