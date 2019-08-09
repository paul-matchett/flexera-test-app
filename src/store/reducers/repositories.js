
import initialState from './initialState';

import {
  FETCHING_REPOSITORIES,
  FETCHING_REPOSITORIES_SUCCESS,
  FETCHING_REPOSITORIES_FAILURE,
} from '../actions/actionTypes';

// Reducer
export default function repositoryReducer(state = initialState.repositories, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

// Handlers
const ACTION_HANDLERS = {
  [FETCHING_REPOSITORIES]: state => ({
    ...state,
    isLoading: true,
    repositories: [],
    hasError: false,
    error: null,
  }),
  [FETCHING_REPOSITORIES_SUCCESS]: (state, action) => ({
    ...state,
    resultCount: action.repositories.total_count,
    repositories: action.repositories.items,
    isLoading: false,
    hasError: false,
    error: null,
  }),
  [FETCHING_REPOSITORIES_FAILURE]: (state, action) => ({
    ...state,
    resultCount: action.repositories.total_count,
    isLoading: false,
    hasError: true,
    error: action.error,
  }),
};

// Private selectors
export const respositoriesLoading = store => store.isLoading;
export const getAllRepositories = store => store.repositories;
export const getRepositoryCount = store => store.resultCount;