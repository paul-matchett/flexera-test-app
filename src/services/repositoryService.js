import axios from 'axios';

export const getAllRepositories = (page=1, perPage=10) => {
  return axios.get(`https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=${perPage}&page=${page}`);
};