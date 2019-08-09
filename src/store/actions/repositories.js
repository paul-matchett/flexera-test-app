import * as actionTypes from './actionTypes';

import { getAllRepositories } from '../../services/repositoryService';

const _fetchAllRepositories = () => {
  return {
    type: actionTypes.FETCHING_REPOSITORIES,
  };
};

const _fetchAllRepositoriesFailed = error => {
  return {
    type: actionTypes.FETCHING_REPOSITORIES_FAILURE,
    error,
    resultCount: 0,
  };
};

const _fetchAllRepositoriesSuccess = (repositories, resultCount) => {
  return {
    type: actionTypes.FETCHING_REPOSITORIES_SUCCESS,
    repositories,
    resultCount,
  };
};

// Thunks

export const fetchAllRepositories = (pageNumber = 1) => dispatch => {
  dispatch(_fetchAllRepositories());

  getAllRepositories(pageNumber)
    .then(({data: repositories}) => {
      dispatch(_fetchAllRepositoriesSuccess(repositories, repositories.length));
    })
    .catch( error => {
      dispatch(_fetchAllRepositoriesFailed(error));
    });
};