import { combineReducers } from 'redux';
import repositoryReducer, * as FromRepository from './repositories';

const REPOSITORIES = 'REPOSITORIES';

const rootReducer = combineReducers({
  [REPOSITORIES]: repositoryReducer,
});
export default rootReducer;

// Public Selectors//
/////////////////////

// Repositories
export const respositoriesLoading = store => 
  FromRepository.respositoriesLoading(store[REPOSITORIES]);

export const getAllRepositories = store =>
  FromRepository.getAllRepositories(store[REPOSITORIES]);

export const getRepositoryCount = store =>
  FromRepository.getRepositoryCount(store[REPOSITORIES]);