import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchAllRepositories } from '../../store/actions/repositories';
import { getRepositoryCount } from '../../store/reducers';

import { 
  PaginationContainer, 
  PaginationCount, 
  PageButton 
} from './style';

const Pagination = ({ newResultsLoading }) => {

  const dispatch = useDispatch();
  const resultCount = useSelector(state => getRepositoryCount(state));

  const [pageNumber, setpageNo] = React.useState(1);

  React.useEffect(() => {
    const pageNumberData = localStorage.getItem("page-number");
    if (pageNumberData) {
      setpageNo(JSON.parse(pageNumberData));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("page-number", JSON.stringify(pageNumber));
  });

  const onUpdatePagination = (number) => {
    if (!newResultsLoading) {
      setpageNo(number);
      dispatch(fetchAllRepositories(number, 10));
    }
  }
  
  const pageNumbers = [];
  for (let i = 1; i <= 8; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PaginationCount>Total Repository Count: {resultCount}</PaginationCount>
      <PageButton 
        disabled={pageNumber === 1}
        onClick={() => onUpdatePagination(pageNumber - 1)}
      >&#8678;</PageButton>
      {
        pageNumbers.map(number => {
            return (
              <PageButton 
                key={number} 
                className={
                  pageNumber === number ? 'active' : ''
                } 
                onClick={() => onUpdatePagination(number)}
              >{number}</PageButton>
            );
        })
      }
      <PageButton 
        disabled={pageNumber === 8}
        onClick={() => onUpdatePagination(pageNumber + 1)}
      >&#8680;</PageButton>
    </PaginationContainer>
  );
};

export default Pagination;