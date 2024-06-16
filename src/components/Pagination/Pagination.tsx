import React from 'react';
import StyledPagination from './styled';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
}

const Pagination = (props: PaginationProps) => {
    const { currentPage, totalPages, paginate } = props;

    const pageNumbers: number[] = [];
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
        pageNumbers.push(i);
    }

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <StyledPagination>
            <ul className="pagination">
                {!isFirstPage && (
                    <li className="page-item">
                        <button onClick={() => paginate(currentPage - 1)} className="page-link">
                            Previous
                        </button>
                    </li>
                )}
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <button onClick={() => paginate(number)} className={`page-link ${number === currentPage ? 'active' : ''}`}>
                            {number}
                        </button>
                    </li>
                ))}
                {!isLastPage && (
                    <li className="page-item">
                        <button onClick={() => paginate(currentPage + 1)} className="page-link">
                            Next
                        </button>
                    </li>
                )}
            </ul>
        </StyledPagination>
    );
};

export default Pagination;
