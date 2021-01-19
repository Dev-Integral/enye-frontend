import React from 'react';
import '../css/pagination.css';

const Pagination =({profilesPerPage, totalProfiles, paginate, currentPage}) => {
    const pageNumbers = [];
    const randnum= currentPage; 
    
    for ( let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++ ) {
        pageNumbers.push(i);
    }
    return(
        <span className="page-holder">
            <button className="next" 
                onClick={()=> 
                paginate(randnum - 1)}><i className="fa fa-chevron-left"></i> Prev
            </button>
            <button className="next"
            onClick={()=> 
                paginate(randnum + 1)}>Next <i className="fa fa-chevron-right"></i></button>
        </span>
        )
}

export default Pagination;